import LenisScrollProvider from "./lenisScrollProvider";


interface Props extends React.PropsWithChildren{}

export default function Providers({children}: Props){
  return (
    <LenisScrollProvider>
      {children}
    </LenisScrollProvider>
  )
}