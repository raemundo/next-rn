import Link from 'next-rn/link'
import { useRouter } from 'next/router'
import { View, Text } from "react-native";
import useRouting from "next-rn/router/use-routing";

export default function LocaleSwitcher() {
  const router_ = useRouter()
  // const router = useRouting();

  // const { locales, locale: activeLocale } = router
  // const otherLocales = locales.filter((locale) => locale !== activeLocale)
  return (
    <View>
      <Text></Text>
      <Link routeName="profile" params={{ id: "ahmed" }} web={{ path: "profile/[id]" }} locale={router_.locale === 'en' ? 'de' : 'en'}>  
        Locale switcher:
      </Link>
      {/* <ul>
        {otherLocales.map((locale) => {
          const { asPath } = router_
          const { pathname, getParam } = router
          const id = getParam('id');
          console.log({ pathname, id, asPath })
          return (
            <li key={locale}>
              <Link routeName="profile" params={{ id: "ahmed" }} web={{ path: "profile/[id]" }} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          )
        })}
      </ul> */}
    </View>
  )
}
