import Head from "next/head";

type Meta = {
    hid: any
    name: string
    content: string
}

type Script = {
    type: string
    innerHTML: any
}

type MetaInfo = {
    title: string
    meta?: Array<Meta>
    script?: Array<Script>
}

type Props = {
    metaInfo: MetaInfo
}

function NHead({ metaInfo: { title, meta, script } }: Props) {
    return (
        <Head>
            <title>{title}</title>
            {meta && meta.map(m => (<meta key={m.hid} name={m.name} content={m.content} />))}
            {script && script.map((s, i) => (<script key={i} type={s.type} dangerouslySetInnerHTML={{ __html: s.innerHTML }} />))}
        </Head>
    )
}

export default NHead