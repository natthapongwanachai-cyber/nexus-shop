import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, email, password } = body;

    // 1. เช็กว่ากรอกข้อมูลมาครบไหม
    if (!username || !email || !password) {
      return NextResponse.json({ error: "กรุณากรอกข้อมูลให้ครบถ้วน" }, { status: 400 });
    }

    // 2. เช็กว่า Username หรือ Email นี้มีคนใช้ไปหรือยัง
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email: email }, { username: username }],
      },
    });

    if (existingUser) {
      return NextResponse.json({ error: "Username หรือ Email นี้มีในระบบแล้ว" }, { status: 409 });
    }

    // 3. เข้ารหัสผ่าน (Hashing) เพื่อความปลอดภัยสูงสุด
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. บันทึกข้อมูลลงฐานข้อมูล (ต้องมี email ตรงนี้ครับ)
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "สมัครสมาชิกสำเร็จ!", user: newUser }, { status: 201 });
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json({ error: "เกิดข้อผิดพลาดจากเซิร์ฟเวอร์" }, { status: 500 });
  }
}