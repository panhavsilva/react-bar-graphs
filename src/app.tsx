import { Graphic } from '@panhasilva/react-bar-graphs'

type Data = {
  label: string,
  value: number,
}

const data: Data[] = [
  { label: 'Seg', value: 9720 },
  { label: 'Ter', value: 3600 },
  { label: 'Qua', value: 300 },
  { label: 'Qui', value: 9000 },
  { label: 'Sex', value: 6480 },
  { label: 'Sáb', value: 9720 },
  { label: 'Dom', value: 1800 },
]

export const App = () => {
  return (
    <>
      <h1>Example Bar Graphs</h1>
      <Graphic title='Título' data={data} />
    </>
  )
}
