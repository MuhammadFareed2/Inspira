import { ConnectDB } from "@/lib/dbConnect";
import { UserModal } from "@/lib/modals/UserModal";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export async function POST(request) {
    await ConnectDB();
    const obj = await request.json();
    console.log("login obj=>", obj);

    
    const user = await UserModal.findOne({ email: obj.email });
    console.log(user)
    return Response.json('Working On Login')
}