import React from "react"

interface UserData {
    id: number,
    name:string,
    city?:string,
    country?:string,
    favorite_sport?:string,
  }
interface CardProps {
    name:string,
    city?:string,
    country?:string,
    favorite_sport?:string,
}
interface ButtonProps {
    label:string,
    isOn: Boolean,
    handleClick?:()=>void
}
interface customInputProps {
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    isOn?: boolean
}

  export type {
    UserData,
    CardProps,
    ButtonProps,
    customInputProps
  }