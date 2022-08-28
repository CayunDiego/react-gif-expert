import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

//Ejercicios de tarea, ver si están bien
describe('Pruebas en <GifExpertApp/>', () => {
  const inputValue = 'Pokemon'

  test('Debe escribir en el input', () => {
    render( <GifExpertApp/> )
    // screen.debug()

    const input = screen.getByRole('textbox')
    fireEvent.input( input, { target: { value: inputValue } })

    expect( input.value ).toBe( inputValue )
  })

  test('Debería agregar la categoría si no existe previamente', () => { 
    const { container } = render( <GifExpertApp /> )

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input( input, { target: { value: inputValue } })
    fireEvent.submit( form )
    expect( container.getElementsByClassName('card-grid').length ).toBe( 2 )
  })

  test('Validar que no se agregue una categoría existente', async () => {
    const { container } = render( <GifExpertApp /> )

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    
    fireEvent.input( input, { target: { value: inputValue } } )
    fireEvent.submit( form )

    fireEvent.input( input,  { target: { value: inputValue } } )
    fireEvent.submit( form )

    // screen.debug();
    
    const items = await screen.findAllByText(inputValue)
    expect( items ).toHaveLength(1)

    expect( container.getElementsByClassName('card-grid').length ).toBe( 2 )
  })
})