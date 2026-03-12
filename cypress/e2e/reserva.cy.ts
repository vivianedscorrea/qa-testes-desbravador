import { getToday, getDaysLater } from '../support/dataHelper'

const diaHoje = getToday()
const diaDepois = getDaysLater(3)

describe('Desafio reserva online', () => {

  it('Deve realizar uma reserva seguindo os passos do desafio', () => {


    cy.visit('https://reservas.desbravador.com.br/hotel-app/hotel-teste-desbravador-8050')

    cy.wait(5000)

    // selecionar datas
    cy.get('.day.toMonth.valid').contains(diaHoje).click()
    cy.get('.day.toMonth.valid').contains(diaDepois).click()

    cy.get('[name="calendar-adults"]').clear().type('2')

    cy.get('.btn-children').click()

    cy.get('#faixa1')
    .type('1')

    // reCAPTCHA não pode ser automatizado
    // prosseguindo com o fluxo
    // aguarda usuário clicar no captcha manualmente
    cy.wait(20000)

    cy.contains('Verificar Disponibilidade')
    .click({ force: true })

    cy.url().should('equal', 'https://reservas.desbravador.com.br/hotel-app/hotel-teste-desbravador-8050/reservation?checkin=2026-03-12&checkout=2026-03-15&adults=2&child1=1&child2=0&child3=0&voucher=&resident=0')

    cy.wait(15000)

    cy.contains('STANDARD ST1').parents().find('.btn-add').first().click()

    cy.contains('Continuar').should('be.visible').click()

    cy.contains('Continuar').last().click()

    cy.url().should('equal', 'https://reservas.desbravador.com.br/hotel-app/hotel-teste-desbravador-8050/checkout')

    cy.get('[name="email"]').should('be.visible').type('vivianecorreasv@gmail.com')

    cy.get('[name="firstName"]').should('be.visible').type('Viviane')

    cy.get('[name="lastName"]').should('be.visible').type('Correa')

    cy.get('[name="documentType"]').should('be.visible').type('Correa')

    cy.get('[name="documentType"]').should('be.visible').select('CPF')

    cy.get('[name="document"]').should('be.visible').type('87572389015')

    cy.get('[name="telephone"]').should('be.visible').type('51995284564')

    cy.contains('label', 'Pais').parent().find('input').first().type('BRASIL{enter}')

    cy.contains('label', 'CEP').parent().find('input').type('09530211')

    cy.contains('label', 'CEP').parent().find('button').click() 

    cy.contains('label', 'Cartão de Crédito').parent().find('input[type="radio"]').should('be.checked')

    cy.contains('label', 'Número do Cartão').parent().find('input').type('4000000000000044')

    cy.contains('label', 'Nome Completo (Conforme exibido no cartão)').parent().find('input').type('DESBRAVADOR SOFTWARE')

    cy.contains('label', 'Validade').parent().find('input').type('12/33')

    cy.contains('label', 'CVC').parent().find('input').type('123')

    cy.contains('label', 'Parcelamento').parent().find('select').select('A vista')

    // reCAPTCHA não pode ser automatizado
    // prosseguindo com o fluxo
    // aguarda usuário clicar no captcha manualmente
    cy.wait(20000)

    cy.contains('label', 'Concordo com as políticas do hotel').parent().find('input[type="checkbox"]').should('be.visible').click()

    cy.contains('Finalizar').should('be.visible').click()

    cy.wait(5000)

    cy.url().should('equal', 'https://reservas.desbravador.com.br/hotel-app/hotel-teste-desbravador-8050/success')

    cy.contains('Sua reserva está efetuada!').should('be.visible')

    cy.contains('button', 'Nova reserva') .should('be.visible').and('be.enabled').and('have.text', 'Nova reserva')   
    
  })

})