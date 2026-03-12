Feature: Reserva online

Scenario: Realizar reserva completa com sucesso
Given que o usuário acessa o site de reservas
When informa um período de estadia de no mínimo 3 dias
And verifica a disponibilidade de quartos
And seleciona o quarto STANDARD ST1
And adiciona 2 adultos e 1 criança à reserva
And marca o checkbox reCAPTCHA
And informa os dados dos hóspedes
And realiza o pagamento com cartão de crédito válido
Then a reserva deve ser concluída com sucesso