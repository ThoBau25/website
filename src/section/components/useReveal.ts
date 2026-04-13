import { ref } from "vue"
import { useIntersectionObserver } from "@vueuse/core"

export function useReveal() {
  const element = ref<HTMLElement | null>(null)

  const { stop } = useIntersectionObserver(
    element,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        element.value?.classList.add("visible")
        stop()
      }
    },
    { threshold: 0.1 }
  )

  return element
}