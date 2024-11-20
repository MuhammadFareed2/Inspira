import { ConnectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/UserModal";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export async function POST(request) {
    await ConnectDB();
    const obj = await request.json();
    console.log("obj=>", obj);

    const user = await UserModal.findOne({ email: obj.email });
    if (user) {
        return Response.json(
            { error: true, msg: "user already exist" },
            { status: 403 }
        );
    }

    const saltRounds = 10;

    const hashPassword = await bcrypt.hash(obj.password, saltRounds)

    obj.password = hashPassword

    console.log("password=>", obj.password)
    console.log("hashPassword=>", hashPassword)

    let newUser = new UserModal({ ...obj })
    newUser = await newUser.save();

    const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_KEY);


    return Response.json({
        error: false,
        msg: "User Added Successfully",
        user: newUser,
        token,
    });

}

export async function GET() {
    return Response.json("User Post Request");
}
