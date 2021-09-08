export default function Web(Native, Next)  {
    const isNext = process.env.NEXT_PUBLIC_IS_NEXT;
    const Web = isNext ? Next : Native;
    return Web
}
