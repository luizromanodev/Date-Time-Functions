# Date Time Functions

Este repositório contém três funções em JavaScript para manipulação de datas e horas.

## Funções

### 1. getLaterDate

Retorna a data maior entre duas datas.

**Parâmetros**:
- `date1` (Date): Primeira data.
- `date2` (Date): Segunda data.

**Retorno**:
- (Date): A data maior entre `date1` e `date2`.

**Exemplo**:
javascript
`const date1 = new Date('2023-05-01');
const date2 = new Date('2024-05-01');
console.log(getLaterDate(date1, date2)); // 2024-05-01T00:00:00.000Z`

2. getDateInterval
   
Calcula o intervalo em dias entre duas datas. O primeiro parâmetro deve ser uma data anterior ao segundo.

Parâmetros:

date1 (Date): Data inicial (mais antiga).
date2 (Date): Data final (mais recente).

Retorno:
(Number): O número de dias entre date1 e date2.

3. getCurrentFormattedDate
   
Retorna a data e hora atual no formato hora:minuto - dia/mês/ano.

Retorno:
(String): A data e hora atual formatada.
