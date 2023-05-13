import { useRouter } from 'next/router'

const Store = () => {
  const router = useRouter();
  return (
    <div>Store {router.query.id}</div>
  )
}

export default Store