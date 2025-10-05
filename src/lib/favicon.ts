import logo from '@/assets/logo.png'

export function updateFavicon() {
  const links = document.querySelectorAll("link[rel*='icon']")
  links.forEach(link => {
    link.setAttribute('href', logo)
  })
}