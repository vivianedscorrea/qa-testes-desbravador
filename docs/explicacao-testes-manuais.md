# Explicação da Estratégia e Escopo dos Testes Manuais

Os testes foram estruturados com foco na validação do fluxo principal de utilização da aplicação de reservas, priorizando os caminhos que, ao meu ver, representam o comportamento mais comum do usuário ao realizar uma busca por hospedagem.

A abordagem utilizada foi baseada na validação do **Happy Path** (fluxo esperado de utilização) combinado com **principais validações negativas**, garantindo que tanto o comportamento correto quanto algumas restrições do sistema fossem verificados.

O fluxo testado contempla principalmente:

- Acesso à página de reservas
- Seleção de datas de **check-in**
- Seleção de datas de **check-out**
- Validação de restrições de datas
- Preenchimento da quantidade de hóspedes
- Validação de limites de hóspedes
- Validação do **reCAPTCHA**
- Tentativa de verificação de disponibilidade

Os cenários foram estruturados utilizando o formato **BDD (Dado / Quando / Então)** para tornar a leitura mais clara e facilitar o entendimento do comportamento esperado do sistema.

Também foi adotada uma estratégia de **priorização de cenários**, onde para cada funcionalidade foram criados, em média, **dois cenários de teste**:

- um cenário positivo (fluxo esperado)
- um cenário negativo (validação de restrição ou erro)

Essa abordagem permitiu validar as principais regras do sistema mesmo com limitação de tempo.

---

# Escopo Testado

Os testes realizados focaram **exclusivamente na primeira tela da aplicação de reservas**, que contém o formulário inicial de busca.

Essa tela concentra as principais interações iniciais do usuário no processo de reserva e representa o primeiro ponto de validação das regras de negócio.

---

# Limitações Encontradas

Durante a execução do desafio não foram disponibilizados artefatos adicionais como:

- documentação funcional
- especificação de requisitos
- protótipos de interface (ex.: Figma)
- critérios formais de aceitação

Devido a isso, as validações foram realizadas com base **no comportamento observado da interface e nas interações disponíveis ao usuário**, assumindo as regras de negócio implícitas no sistema.

---

# Pontos Fortes da Abordagem

A estratégia adotada permitiu:

- Cobrir o **fluxo principal de reserva**
- Validar cenários **positivos e negativos**
- Testar as principais regras de interação da interface
- Garantir **rastreabilidade dos testes** através de identificação por ID
- Documentar os cenários em formato estruturado
- Registrar **evidências da execução dos testes**

---

# Possíveis Melhorias com Mais Tempo

Com maior disponibilidade de tempo, seria possível ampliar a cobertura de testes incluindo:

## Validação de datas

- check-in igual ao check-out
- estadias muito longas
- datas muito futuras
- diferentes combinações de datas

## Validação de campos

- valores mínimos e máximos de hóspedes
- campos vazios
- inserção de caracteres inválidos

## Testes de interface

- comportamento visual dos componentes
- responsividade da página
- consistência da experiência do usuário

## Fluxo completo da reserva

- análise da tela de resultados de disponibilidade
- seleção de quartos
- continuidade do fluxo de reserva

Essas validações adicionais permitiriam uma cobertura mais completa do sistema e uma análise mais aprofundada das regras de negócio e da experiência do usuário.

