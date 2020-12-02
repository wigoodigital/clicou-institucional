function showBox(box) {


    const serviceBox = document.querySelector('#' + box)

    const serviceBoxAll = document.querySelectorAll('.item')



    const serviceBox1 = document.querySelector('#a')

    const serviceBox2 = document.querySelector('#b')

    const serviceBox3 = document.querySelector('#c')

    const serviceBox4 = document.querySelector('#d')


    const serviceBox5 = document.querySelector('#e')


    const serviceBox6 = document.querySelector('#f')


    const serviceBox7 = document.querySelector('#g')

    let btnPlus = document.querySelector('.btnPlus')


    switch (box) {

        case 'a':

            serviceBox2.classList.remove('box-selected')
            serviceBox3.classList.remove('box-selected')
            serviceBox4.classList.remove('box-selected')


            serviceBox.classList.toggle("box-selected")
            serviceBox2.classList.remove('box-selected')
            serviceBox3.classList.remove('box-selected')
            serviceBox4.classList.remove('box-selected')
            serviceBox6.classList.remove('box-selected')
            serviceBox5.classList.remove('box-selected')
            serviceBox7.classList.remove('box-selected')


            break;

        case 'b':

            serviceBox.classList.toggle("box-selected")
            serviceBox1.classList.remove('box-selected')
            serviceBox3.classList.remove('box-selected')
            serviceBox4.classList.remove('box-selected')
            serviceBox6.classList.remove('box-selected')
            serviceBox5.classList.remove('box-selected')
            serviceBox7.classList.remove('box-selected')

            break;

        case 'c':


            serviceBox.classList.toggle("box-selected")
            serviceBox1.classList.remove('box-selected')
            serviceBox2.classList.remove('box-selected')
            serviceBox4.classList.remove('box-selected')
            serviceBox6.classList.remove('box-selected')
            serviceBox5.classList.remove('box-selected')
            serviceBox7.classList.remove('box-selected')


            break;

        case 'd':

            serviceBox.classList.toggle("box-selected")
            serviceBox1.classList.remove('box-selected')
            serviceBox2.classList.remove('box-selected')
            serviceBox3.classList.remove('box-selected')
            serviceBox6.classList.remove('box-selected')
            serviceBox5.classList.remove('box-selected')
            serviceBox7.classList.remove('box-selected')


            break;

        case 'e':

            serviceBox.classList.toggle("box-selected")
            serviceBox1.classList.remove('box-selected')
            serviceBox2.classList.remove('box-selected')
            serviceBox3.classList.remove('box-selected')
            serviceBox4.classList.remove('box-selected')
            serviceBox6.classList.remove('box-selected')
            serviceBox7.classList.remove('box-selected')


            break;



        case 'f':

            serviceBox.classList.toggle("box-selected")
            serviceBox1.classList.remove('box-selected')
            serviceBox2.classList.remove('box-selected')
            serviceBox3.classList.remove('box-selected')
            serviceBox4.classList.remove('box-selected')
            serviceBox5.classList.remove('box-selected')
            serviceBox7.classList.remove('box-selected')

            break;

        case 'g':

            serviceBox.classList.toggle("box-selected")
            serviceBox1.classList.remove('box-selected')
            serviceBox2.classList.remove('box-selected')
            serviceBox3.classList.remove('box-selected')
            serviceBox4.classList.remove('box-selected')
            serviceBox5.classList.remove('box-selected')
            serviceBox6.classList.remove('box-selected')


            break;



    }

 
}
