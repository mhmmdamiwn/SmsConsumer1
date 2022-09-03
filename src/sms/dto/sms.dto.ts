import { Injectable } from "@nestjs/common";
import { IsNotEmpty } from "class-validator";
export class SmsDto{
    @IsNotEmpty()
    msg:string
}