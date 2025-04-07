function Tr() {
  return <tr></tr>
}

function Error() {
  console.error('This is a Error error')
}

export default function Mismatch() {
  console.error('This is a test error')
  return (
    <div className="parent">
      <table>
        <Tr />
      </table>
      <Error />
    </div>
  )
}
