import { render, screen } from "@testing-library/react"
import { GiftItem } from "../../src/components/GiftItem"

describe('Pruebas en <GifItem />', () => { 
  const title = 'Saitama';
  const url = 'https://one-punch.com/saitama.jpj';

  test('Debe hacer match con el snapshot', () => { 
    const { container } = render( <GiftItem title={title} url={url}/>)
    expect( container ).toMatchSnapshot();
  })


  test('Debe mostrar la imagen con  el URL y el ALT indicado', () => { 

    render( <GiftItem title={title} url={url}/>)
    // screen.debug();
    // console.log(screen.getByRole('img').src);
    // expect( screen.getByRole('img').src).toBe( url );
    // expect( screen.getByRole('img').alt).toBe( title );
    const { src, alt } =  screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );
  })

  test('Debe mostrar el titulo en el componente', () => { 

    render( <GiftItem title={title} url={url}/>)
    expect( screen.getByText(title) ).toBeTruthy();
  })
})