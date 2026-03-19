import { ref } from "vue"
import { useIntersectionObserver } from "@vueuse/core"

export function useReveal() {
  const element = ref<HTMLElement | null>(null)

  useIntersectionObserver(
    element,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        element.value?.classList.add("visible")
      } else {
        element.value?.classList.remove("visible")
      }
    },
    { threshold: 0.1 }
  )

  return element
}