export type Meta = {
    hid: any
    name: string
    content: string
}

export type Script = {
    type: string
    innerHTML: any
}

export type MetaInfo = {
    title: string
    meta?: Array<Meta>
    script?: Array<Script>
}

export type Props = {
    metaInfo: MetaInfo
}