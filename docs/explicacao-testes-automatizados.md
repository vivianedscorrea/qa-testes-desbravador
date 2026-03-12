# Automatizado – Happy Path da Reserva Online

## Objetivo
Validar que o usuário consegue completar uma **reserva de forma bem-sucedida** seguindo o fluxo principal do site de reservas, incluindo seleção de datas, quarto, hóspedes, preenchimento de dados pessoais e pagamento.

---

## Fluxo Automatizado

### Acesso à aplicação
- Abre a página principal da aplicação de reservas.

### Seleção de datas
- Escolhe a data de check-in como hoje e check-out três dias depois.
- Automatizado com `dateHelper.ts`:

```typescript
export function getToday() {
  const today = new Date()
  return today.getDate()
}

export function getDaysLater(days: number) {
  const date = new Date()
  date.setDate(new Date().getDate() + days)
  return date.getDate()
}
```
> Essa funcionalidade garante que sempre serão selecionadas datas válidas no sistema, mantendo **três dias de diferença** entre check-in e check-out, sem precisar alterar o teste manualmente.

---

## Preenchimento de hóspedes
- 2 adultos
- 1 criança até 5 anos

---

## Verificação de disponibilidade
- Clica no botão **“Verificar Disponibilidade”** após o preenchimento dos campos obrigatórios.

---

## Seleção de quarto
- Adiciona o quarto **STANDARD ST1** à reserva.

---

## Preenchimento de dados pessoais
- Nome
- Sobrenome
- E-mail
- Documento (CPF)
- Telefone
- País
- CEP

---

## Pagamento com cartão de crédito
- Número: `4000000000000044`
- Nome: `DESBRAVADOR SOFTWARE`
- Validade: `12/33`
- CVC: `123`
- Parcelamento: **“À vista”**

---

## Concordância com políticas do hotel
- Marca o checkbox de concordância.

---

## Finalização da reserva
- Clica em **“Finalizar”** e valida que a URL muda para a página de sucesso.  
- Confirma a mensagem **“Sua reserva está efetuada!”** e botão **“Nova reserva”** visível.

---

## Observações Importantes
- **reCAPTCHA:** não pode ser automatizado; o teste aguarda interação manual do usuário nesses pontos.  
- **Validações:** cada passo possui verificações de visibilidade, habilitação e conteúdo dos elementos.  
- **Confirmação final:** garante que a reserva foi concluída corretamente e que a interface apresenta o feedback esperado ao usuário.

## Instalação do Cypress e TypeScript

Para preparar o ambiente de testes:

### 1. Inicializar projeto Node.js
*(se ainda não tiver `package.json`)*

```bash
npm init -y
  ```
### 2. Instalar Cypress e TypeScript como dependências de desenvolvimento:

```bash
npm install cypress typescript --save-dev
  ```

### 3. Instalar tipos para Node.js (opcional, mas recomendado para TypeScript):

```bash
npm install @types/node --save-dev
  ```

## Instalação do Cypress e TypeScript

Abrir Cypress em modo interativo

```bash
npx cypress open
  ```
- Abre a interface do Cypress para selecionar e rodar testes manualmente.

## Próximos Passos / Melhorias

- Abrir Cypress em modo interativo

- Adicionar mais cenários de teste automatizados, incluindo fluxos negativos.

- Implementar integração com CI/CD (ex.: GitHub Actions) para execução automática.

- Cobrir todas as regras de negócio observadas na interface.

- Expandir testes para diferentes combinações de datas e hóspedes.
