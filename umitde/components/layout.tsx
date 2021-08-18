interface LayoutProps {
  children: React.ReactNode;
}


export default function Layout({ children}:  LayoutProps) {
  return (
    <>
      Layout Starting...
      {children}
    </>
  )
}