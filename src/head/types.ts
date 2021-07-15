export type Meta = {
    hid: string
    name: string
    content: string
}
 
export type Script = {
    type: string
    innerHTML: string
}

export type MetaInfo = {
    title: string
    meta?: Array<Meta>
    script?: Array<Script>
}

export type Props = {
    metaInfo: MetaInfo
}
