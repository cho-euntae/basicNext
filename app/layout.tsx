import { Metadata } from "next"
import Navigation from "../components/navigation"

// export const metadata = {
//   description: 'Generated by Next.js',
// }
export const metadata :Metadata = {
  title:{
    template: "%s | Next Movies", // %s 은 페이지에서 가지고 있는 데이터
    default: "Loading...", // 메타데이터가 없는곳
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
