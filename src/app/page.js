'use client'

export default function Home() {


  const HandleGetData = () => {
    fetch("/api/getdata",)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">


      <button onClick={HandleGetData}  >Get Data</button>

    </main>
  )
}
