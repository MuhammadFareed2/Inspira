import { ConnectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/UserModal";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export async function POST(request) {
    await ConnectDB();
    const obj = await request.json();
    console.log("login obj=>", obj);


    const user = await UserModal.findOne({ email: obj.email });

    if (!user) return Response.json(
        { error: true, msg: "User Not Find" },
        { status: 404 }
    )

    const isPasswordMatch = await bcrypt.compare(obj.password, user.password);

    if (!isPasswordMatch) return Response.json(
        { error: true, msg: "Password Is Not Valid" },
        { status: 400 }

    )
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_KEY);


    console.log("isPasswordMatch=>", isPasswordMatch);

    return Response.json({
        error: false,
        msg: "User Login Successfully",
        user: newUser,
        token,
    });

}