interface LayoutInterface {
  children: React.ReactNode
}

const AuthLayout = ({
  children
}: LayoutInterface) => {
  return (
    <main className="h-full flex items-center justify-center">
      {children}
    </main>
  )
}

export default AuthLayout