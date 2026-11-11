# Dicionário de Dados — Trimix Sorveteria

Projeto acadêmico do **Grupo 07** da Universidade Cidade de São Paulo (UNICID), desenvolvido na disciplina de Modelagem de Banco de Dados.

**Projeto:** Sistema de Gestão Operacional e Vendas — Trimix Sorveteria  
**Banco de dados:** `trimix_sorveteria`  
**Tecnologia de referência:** MySQL 8.0 / InnoDB

🌐 **[Acessar o dicionário de dados interativo](https://lohanyshimabukuro17-dotcom.github.io/dicionario-dados-trimix/)**

## Objetivo

Disponibilizar uma documentação web consultável do modelo relacional da Trimix Sorveteria, favorecendo a compreensão dos metadados, a rastreabilidade entre requisitos e estruturas do banco e a discussão de governança de dados com base em conceitos de **DAMA-DMBOK** e **COBIT**.

A alfabetização em dados (*Data Literacy*) ajuda a equipe a compreender o significado, a origem e as restrições de cada informação, contribuindo para o uso responsável dos dados.

## Conteúdo e funcionalidades

- Catálogo das **19 tabelas e 113 colunas** identificadas no DDL utilizado como referência.
- Descrição de tipos de dados, nulabilidade, chaves primárias, estrangeiras e restrições presentes no SQL.
- Busca dinâmica por tabelas e colunas.
- Alternância entre os temas claro e escuro.
- Visualização do DER em janela interativa com zoom e movimentação (Panzoom.js).
- Acesso à especificação de requisitos em PDF.
- Identificações documentais de sensibilidade **LGPD/GDPR** e orientações de acesso **RBAC**.

> **Nota de governança:** as classificações LGPD/GDPR e RBAC exibidas no site são informações documentais e não demonstram, por si só, controles técnicos de acesso implementados. A menção ao GDPR é comparativa, sem pressupor sua aplicabilidade ao projeto.

## Estrutura do repositório

```text
dicionario-dados-trimix/
├── index.html
├── style.css
├── script.js
├── README.md
├── docs/
│   ├── Especificacao_Requisitos_Regras_Negocio_BD.pdf
│   └── DDL_original_trimix.sql
└── assets/
    └── der.png
```

## Documentação e rastreabilidade

- **Requisitos:** `docs/Especificacao_Requisitos_Regras_Negocio_BD.pdf`
- **DER:** `assets/der.png`
- **DDL de referência:** `docs/DDL_original_trimix.sql`

O material reúne a especificação, o modelo gráfico e o script utilizados para a análise de coerência de tabelas, atributos, chaves e regras de negócio.

## Equipe

**Grupo 07 — UNICID**

- Marcos Vinicius da Silveira
- Samuel Victor Ferreira
- Lohany Shimabukuro
- Gustavo Cardoso Silva
- Caique Sanches
- Guilherme David Viana de Oliveira
- Felipe Domingos de Lacerda
- Guilherme Nere Ferreira do Nascimento
- Renato Alexandre Silva de Almeida
- Alexsander Rosa Ribeiro
- Gustavo Henrique Lima dos Santos

Os papéis específicos de **Data Owner** e **Data Steward** ainda dependem de definição ou confirmação pelo grupo.

## Verificação e próximos ajustes

O repositório contém a versão publicada do dicionário. A auditoria estática identificou pontos para revisão, incluindo restrições `CHECK` mencionadas no DER e nos requisitos, mas não declaradas no DDL de referência, além da necessidade de conferir a criação das chaves entre `loja` e `funcionario`.

A especificação foi disponibilizada com o histórico existente de revisões e anotações de revisão; **as alterações propostas ainda precisam ser aplicadas e validadas no modelo e no SQL**. A execução integral do DDL em MySQL 8 não foi comprovada nesta entrega. O visualizador do DER utiliza Panzoom por CDN e requer conexão com a internet.

## Publicação

O site é hospedado no **GitHub Pages**, a partir da branch `main` e da pasta `/(root)`:

- **Site:** https://lohanyshimabukuro17-dotcom.github.io/dicionario-dados-trimix/
- **Código-fonte:** https://github.com/lohanyshimabukuro17-dotcom/dicionario-dados-trimix
