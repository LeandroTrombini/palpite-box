import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {

  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0
  })
  const notas = [0, 1, 2, 3, 4, 5]
  const [sucess, setSucess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {

    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSucess(true)
      setRetorno(data)
    } catch (err) {

    }
  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  return (

    <div className='pt-6 pb-10 bg-gray-100 mx-auto justify-center p-2' >
      <PageTitle title='Pesquisa' />
      <h1 className=' text-center text-gray-500 font-bold my-4 text-2xl' >Críticas e sugestões</h1>
      <p className='text-center text-gray-500 text-sm mb-6' >
        O restaurante X sempre busca por atender melhor seus clientes. <br></br>
            Por isso, estamos sempre abertos a ouvir a sua opinião.
          </p>

      {!sucess &&
        <div className='flex flex-col space-y-4 text-gray-500 w-2/5 mx-auto justify-center bg-white p-8 max-w-4xl rounded-xl shadow-2xl '  >


          <label for='Nome' className='font-bold  ' >Seu nome:</label>
          <input type='text' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-cyan-300 ' placeholder='Nome' onChange={onChange} name='Nome' id='Nome' value={form.Nome} />
          <label for='Email' className='font-bold' >E-mail:</label>
          <input type='text' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-cyan-300' placeholder='Email' onChange={onChange} name='Email' id='Email' value={form.Email} />
          <label for='Whatsapp' className='font-bold' >Whatsapp:</label>
          <input type='text' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-cyan-300' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' id='Whatsapp' value={form.Whatsapp} />
          <label for='Sugeste' className='font-bold' >Crítica ou sugestão:</label>
          <textarea className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-cyan-300' rows='4' placeholder='Crítica/Sugestão' onChange={onChange} name='Sugest' id='Sugest' value={form.Sugest} />
          <label for='Nota' className='font-bold' >Nota:</label>
          <div className='flex py-0 ' >
            {notas.map(nota => {
              return (
                <label className='block w-1/6 text-center ' >
                  {nota} <br />
                  <input type='radio' name='Nota' id='Nota' value={nota} onChange={onChange} />
                </label>)
            })
            }
          </div>
          <button className='inline-block text-white bg-cyan-700 px-6 py-2 font-bold uppercase text-sm rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>

        </div>}
      {sucess && <div className='w-1/5 mx-auto '>
        <p className='mb-6 text-center  border-t border-b border-cyan-700 px-4 py-3' >Obrigado por contribuir com a sua sugestão ou crítica</p>
        {
          retorno.showCoupon && <div className='text-center text-gray border p-4 mb-4' >
            Seu cupom: <br />
            <span className='font-bold text-2xl' >{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4' >

            <span className='font-bold text-gray block mb-2' >{retorno.Promo}</span>
            <br />
            <span className='italic text-gray-700' >Tire um print ou foto desta tela e apresente ao garçon.</span>

          </div>
        }

      </div>}
    </div>

  )
}

export default Pesquisa