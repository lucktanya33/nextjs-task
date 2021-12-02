import Link from 'next/link'
import { data } from '../../utils/data'

function TitleList () {
  return (
    <div>
      <h1>Title List</h1>
      {data.map(item => {
        return (
        <Link href={'/titles/' + item.id} key={item.id}>
          <a>
            <h3>{ item.title }</h3>
          </a>
        </Link>
        )
      })
      }
    </div>
  )
}

export default TitleList