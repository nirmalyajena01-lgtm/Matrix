'use client';
import {ButtonHTMLAttributes} from 'react';
export function Button({className='',...props}:ButtonHTMLAttributes<HTMLButtonElement>){return <button className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-bold transition active:scale-[.98] disabled:opacity-50 ${className}`} {...props}/>;}
