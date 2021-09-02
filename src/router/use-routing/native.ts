import { useNavigation, useRoute } from '@react-navigation/native'
import { useCallback } from 'react'
import { NavigateTo } from './types'

export default function useRouting() {
  const {
    navigate: nav,
    // getParam: grabParam,
    // @ts-ignore
    push: pushTo,
    goBack,
  } = useNavigation()

  const { params: grabParam } = useRoute();

  const navigate = useCallback(
    <To extends NavigateTo = NavigateTo>(route: To) => {
      nav(
        // @ts-ignore
        route.routeName,
        route.params,
      )
    },
    [nav]
  )
  const push = useCallback(
    <To extends NavigateTo = NavigateTo>(route: To) => {
      pushTo(route)
    },
    [pushTo]
  )
  const getParam = <Param>(param: string, fallback?: unknown): Param => {
    // @ts-ignore
    const value = grabParam[param] //grabParam(param, fallback)
    return value
  }

  return { navigate, getParam, push, goBack: () => goBack() }
}