const TABLES = [
  {
    "name": "cidade",
    "columns": [
      {
        "name": "id_cidade",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "nome_cidade",
        "type": "VARCHAR(100)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": true,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Índice UNIQUE (inclusive composto, conforme DDL). "
      },
      {
        "name": "uf",
        "type": "CHAR(2)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": true,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Índice UNIQUE (inclusive composto, conforme DDL). "
      }
    ],
    "pk": [
      "id_cidade"
    ],
    "foreignKeys": []
  },
  {
    "name": "endereco",
    "columns": [
      {
        "name": "id_endereco",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "id_cidade",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "cidade.id_cidade",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → cidade.id_cidade. "
      },
      {
        "name": "cep",
        "type": "CHAR(8)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": true,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Índice UNIQUE (inclusive composto, conforme DDL). "
      },
      {
        "name": "logradouro",
        "type": "VARCHAR(150)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "bairro",
        "type": "VARCHAR(100)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      }
    ],
    "pk": [
      "id_endereco"
    ],
    "foreignKeys": [
      {
        "column": "id_cidade",
        "references": "cidade.id_cidade"
      }
    ]
  },
  {
    "name": "loja",
    "columns": [
      {
        "name": "id_loja",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "nome_loja",
        "type": "VARCHAR(100)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "cnpj",
        "type": "VARCHAR(14)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": true,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Índice UNIQUE (inclusive composto, conforme DDL). "
      },
      {
        "name": "id_endereco",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "endereco.id_endereco",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → endereco.id_endereco. "
      },
      {
        "name": "numero_endereco",
        "type": "VARCHAR(10)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "complemento",
        "type": "VARCHAR(100)",
        "nullable": true,
        "default": "NULL",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "telefone",
        "type": "VARCHAR(15)",
        "nullable": true,
        "default": "NULL",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Contato • avaliar titular",
        "rbac": "Acesso restrito / auditoria",
        "notes": ""
      },
      {
        "name": "id_funcionario_responsavel",
        "type": "INT(11)",
        "nullable": true,
        "default": "NULL",
        "generated": false,
        "pk": false,
        "fk": "funcionario.id_funcionario",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → funcionario.id_funcionario. "
      },
      {
        "name": "ativo",
        "type": "TINYINT(1)",
        "nullable": false,
        "default": "1",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      }
    ],
    "pk": [
      "id_loja"
    ],
    "foreignKeys": [
      {
        "column": "id_endereco",
        "references": "endereco.id_endereco"
      },
      {
        "column": "id_funcionario_responsavel",
        "references": "funcionario.id_funcionario"
      }
    ]
  },
  {
    "name": "funcionario",
    "columns": [
      {
        "name": "id_funcionario",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "id_loja",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "loja.id_loja",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → loja.id_loja. "
      },
      {
        "name": "nome_funcionario",
        "type": "VARCHAR(100)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Pessoal • identificação",
        "rbac": "Acesso restrito / auditoria",
        "notes": ""
      },
      {
        "name": "cpf",
        "type": "VARCHAR(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": true,
        "privacy": "Pessoal • identificador",
        "rbac": "Acesso restrito / auditoria",
        "notes": "Índice UNIQUE (inclusive composto, conforme DDL). "
      },
      {
        "name": "email",
        "type": "VARCHAR(100)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": true,
        "privacy": "Pessoal • contato",
        "rbac": "Acesso restrito / auditoria",
        "notes": "Índice UNIQUE (inclusive composto, conforme DDL). "
      },
      {
        "name": "login",
        "type": "VARCHAR(50)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": true,
        "privacy": "Pessoal • autenticação",
        "rbac": "Acesso restrito / auditoria",
        "notes": "Índice UNIQUE (inclusive composto, conforme DDL). "
      },
      {
        "name": "senha_hash",
        "type": "VARCHAR(255)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Credencial • restrito",
        "rbac": "Acesso restrito / auditoria",
        "notes": ""
      },
      {
        "name": "perfil",
        "type": "ENUM('ATENDENTE', 'GERENTE', 'ADMINISTRADOR')",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "data_admissao",
        "type": "DATE",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "ativo",
        "type": "TINYINT(1)",
        "nullable": false,
        "default": "1",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "data_consentimento_lgpd",
        "type": "DATETIME",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Governança • consentimento",
        "rbac": "Acesso restrito / auditoria",
        "notes": ""
      }
    ],
    "pk": [
      "id_funcionario"
    ],
    "foreignKeys": [
      {
        "column": "id_loja",
        "references": "loja.id_loja"
      }
    ]
  },
  {
    "name": "categoria",
    "columns": [
      {
        "name": "id_categoria",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "nome_categoria",
        "type": "VARCHAR(100)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": true,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Índice UNIQUE (inclusive composto, conforme DDL). "
      },
      {
        "name": "descricao",
        "type": "VARCHAR(255)",
        "nullable": true,
        "default": "NULL",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "ativo",
        "type": "TINYINT(1)",
        "nullable": false,
        "default": "1",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      }
    ],
    "pk": [
      "id_categoria"
    ],
    "foreignKeys": []
  },
  {
    "name": "produto",
    "columns": [
      {
        "name": "id_produto",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "id_categoria",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "categoria.id_categoria",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → categoria.id_categoria. "
      },
      {
        "name": "nome_produto",
        "type": "VARCHAR(100)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "ativo",
        "type": "TINYINT(1)",
        "nullable": false,
        "default": "1",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      }
    ],
    "pk": [
      "id_produto"
    ],
    "foreignKeys": [
      {
        "column": "id_categoria",
        "references": "categoria.id_categoria"
      }
    ]
  },
  {
    "name": "produto_loja",
    "columns": [
      {
        "name": "id_produto_loja",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "id_produto",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "produto.id_produto",
        "unique": true,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → produto.id_produto. Índice UNIQUE (inclusive composto, conforme DDL). "
      },
      {
        "name": "id_loja",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "loja.id_loja",
        "unique": true,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → loja.id_loja. Índice UNIQUE (inclusive composto, conforme DDL). "
      },
      {
        "name": "preco_tabela",
        "type": "DECIMAL(10,2)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "estoque_atual_caixas",
        "type": "INT(11)",
        "nullable": false,
        "default": "0",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "disponivel",
        "type": "TINYINT(1)",
        "nullable": false,
        "default": "1",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      }
    ],
    "pk": [
      "id_produto_loja"
    ],
    "foreignKeys": [
      {
        "column": "id_produto",
        "references": "produto.id_produto"
      },
      {
        "column": "id_loja",
        "references": "loja.id_loja"
      }
    ]
  },
  {
    "name": "baixa_estoque",
    "columns": [
      {
        "name": "id_baixa_estoque",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "id_produto_loja",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "produto_loja.id_produto_loja",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → produto_loja.id_produto_loja. "
      },
      {
        "name": "id_funcionario",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "funcionario.id_funcionario",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → funcionario.id_funcionario. "
      },
      {
        "name": "quantidade_caixas",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "data_baixa",
        "type": "DATETIME",
        "nullable": false,
        "default": "CURRENT_TIMESTAMP()",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      }
    ],
    "pk": [
      "id_baixa_estoque"
    ],
    "foreignKeys": [
      {
        "column": "id_produto_loja",
        "references": "produto_loja.id_produto_loja"
      },
      {
        "column": "id_funcionario",
        "references": "funcionario.id_funcionario"
      }
    ]
  },
  {
    "name": "caixa",
    "columns": [
      {
        "name": "id_caixa",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "id_loja",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "loja.id_loja",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → loja.id_loja. "
      },
      {
        "name": "id_funcionario",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "funcionario.id_funcionario",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → funcionario.id_funcionario. "
      },
      {
        "name": "situacao",
        "type": "ENUM('ABERTO', 'FECHADO')",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "data_abertura",
        "type": "DATETIME",
        "nullable": false,
        "default": "CURRENT_TIMESTAMP()",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "valor_abertura",
        "type": "DECIMAL(10,2)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "data_fechamento",
        "type": "DATETIME",
        "nullable": true,
        "default": "NULL",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "valor_fechamento",
        "type": "DECIMAL(10,2)",
        "nullable": true,
        "default": "NULL",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "valor_esperado",
        "type": "DECIMAL(10,2)",
        "nullable": true,
        "default": "NULL",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "quebra_caixa",
        "type": "DECIMAL(10,2)",
        "nullable": true,
        "default": "NULL",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "id_loja_aberta",
        "type": "INT(11)",
        "nullable": true,
        "default": null,
        "generated": true,
        "pk": false,
        "fk": null,
        "unique": true,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Índice UNIQUE (inclusive composto, conforme DDL). Coluna gerada. "
      }
    ],
    "pk": [
      "id_caixa"
    ],
    "foreignKeys": [
      {
        "column": "id_loja",
        "references": "loja.id_loja"
      },
      {
        "column": "id_funcionario",
        "references": "funcionario.id_funcionario"
      }
    ]
  },
  {
    "name": "estorno_baixa",
    "columns": [
      {
        "name": "id_estorno_baixa",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "id_baixa_estoque",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "baixa_estoque.id_baixa_estoque",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → baixa_estoque.id_baixa_estoque. "
      },
      {
        "name": "id_funcionario",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "funcionario.id_funcionario",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → funcionario.id_funcionario. "
      },
      {
        "name": "quantidade_caixas",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "motivo",
        "type": "VARCHAR(255)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "data_estorno",
        "type": "DATETIME",
        "nullable": false,
        "default": "CURRENT_TIMESTAMP()",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      }
    ],
    "pk": [
      "id_estorno_baixa"
    ],
    "foreignKeys": [
      {
        "column": "id_baixa_estoque",
        "references": "baixa_estoque.id_baixa_estoque"
      },
      {
        "column": "id_funcionario",
        "references": "funcionario.id_funcionario"
      }
    ]
  },
  {
    "name": "venda",
    "columns": [
      {
        "name": "id_venda",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "id_loja",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "loja.id_loja",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → loja.id_loja. "
      },
      {
        "name": "id_funcionario",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "funcionario.id_funcionario",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → funcionario.id_funcionario. "
      },
      {
        "name": "id_caixa",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "caixa.id_caixa",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → caixa.id_caixa. "
      },
      {
        "name": "data_hora",
        "type": "DATETIME",
        "nullable": false,
        "default": "CURRENT_TIMESTAMP()",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      }
    ],
    "pk": [
      "id_venda"
    ],
    "foreignKeys": [
      {
        "column": "id_loja",
        "references": "loja.id_loja"
      },
      {
        "column": "id_funcionario",
        "references": "funcionario.id_funcionario"
      },
      {
        "column": "id_caixa",
        "references": "caixa.id_caixa"
      }
    ]
  },
  {
    "name": "estorno_venda",
    "columns": [
      {
        "name": "id_estorno_venda",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "id_venda",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "venda.id_venda",
        "unique": true,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → venda.id_venda. Índice UNIQUE (inclusive composto, conforme DDL). "
      },
      {
        "name": "id_funcionario_autorizador",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "funcionario.id_funcionario",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → funcionario.id_funcionario. "
      },
      {
        "name": "motivo",
        "type": "VARCHAR(255)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "data_hora",
        "type": "DATETIME",
        "nullable": false,
        "default": "CURRENT_TIMESTAMP()",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      }
    ],
    "pk": [
      "id_estorno_venda"
    ],
    "foreignKeys": [
      {
        "column": "id_venda",
        "references": "venda.id_venda"
      },
      {
        "column": "id_funcionario_autorizador",
        "references": "funcionario.id_funcionario"
      }
    ]
  },
  {
    "name": "forma_pagamento",
    "columns": [
      {
        "name": "id_forma_pagamento",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "descricao",
        "type": "VARCHAR(50)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": true,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Índice UNIQUE (inclusive composto, conforme DDL). "
      },
      {
        "name": "exige_autorizacao",
        "type": "TINYINT(1)",
        "nullable": false,
        "default": "0",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "ativo",
        "type": "TINYINT(1)",
        "nullable": false,
        "default": "1",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      }
    ],
    "pk": [
      "id_forma_pagamento"
    ],
    "foreignKeys": []
  },
  {
    "name": "transferencia_estoque",
    "columns": [
      {
        "name": "id_transferencia_estoque",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "id_loja_origem",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "loja.id_loja",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → loja.id_loja. "
      },
      {
        "name": "id_loja_destino",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "loja.id_loja",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → loja.id_loja. "
      },
      {
        "name": "id_funcionario",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "funcionario.id_funcionario",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → funcionario.id_funcionario. "
      },
      {
        "name": "data_transferencia",
        "type": "DATETIME",
        "nullable": false,
        "default": "CURRENT_TIMESTAMP()",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      }
    ],
    "pk": [
      "id_transferencia_estoque"
    ],
    "foreignKeys": [
      {
        "column": "id_loja_origem",
        "references": "loja.id_loja"
      },
      {
        "column": "id_loja_destino",
        "references": "loja.id_loja"
      },
      {
        "column": "id_funcionario",
        "references": "funcionario.id_funcionario"
      }
    ]
  },
  {
    "name": "item_transferencia",
    "columns": [
      {
        "name": "id_item_transferencia",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "id_transferencia_estoque",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "transferencia_estoque.id_transferencia_estoque",
        "unique": true,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → transferencia_estoque.id_transferencia_estoque. Índice UNIQUE (inclusive composto, conforme DDL). "
      },
      {
        "name": "id_produto",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "produto.id_produto",
        "unique": true,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → produto.id_produto. Índice UNIQUE (inclusive composto, conforme DDL). "
      },
      {
        "name": "quantidade_caixas",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      }
    ],
    "pk": [
      "id_item_transferencia"
    ],
    "foreignKeys": [
      {
        "column": "id_transferencia_estoque",
        "references": "transferencia_estoque.id_transferencia_estoque"
      },
      {
        "column": "id_produto",
        "references": "produto.id_produto"
      }
    ]
  },
  {
    "name": "item_venda",
    "columns": [
      {
        "name": "id_item_venda",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "id_venda",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "venda.id_venda",
        "unique": true,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → venda.id_venda. Índice UNIQUE (inclusive composto, conforme DDL). "
      },
      {
        "name": "id_produto_loja",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "produto_loja.id_produto_loja",
        "unique": true,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → produto_loja.id_produto_loja. Índice UNIQUE (inclusive composto, conforme DDL). "
      },
      {
        "name": "quantidade",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "preco_praticado",
        "type": "DECIMAL(10,2)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "desconto_unitario",
        "type": "DECIMAL(10,2)",
        "nullable": false,
        "default": "0.00",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      }
    ],
    "pk": [
      "id_item_venda"
    ],
    "foreignKeys": [
      {
        "column": "id_venda",
        "references": "venda.id_venda"
      },
      {
        "column": "id_produto_loja",
        "references": "produto_loja.id_produto_loja"
      }
    ]
  },
  {
    "name": "log_acesso",
    "columns": [
      {
        "name": "id_log_acesso",
        "type": "BIGINT(20)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "id_funcionario",
        "type": "INT(11)",
        "nullable": true,
        "default": "NULL",
        "generated": false,
        "pk": false,
        "fk": "funcionario.id_funcionario",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → funcionario.id_funcionario. "
      },
      {
        "name": "login_informado",
        "type": "VARCHAR(50)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Pessoal potencial • autenticação",
        "rbac": "Acesso restrito / auditoria",
        "notes": ""
      },
      {
        "name": "sucesso",
        "type": "TINYINT(1)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "ip_origem",
        "type": "VARCHAR(45)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Pessoal potencial • identificador online",
        "rbac": "Acesso restrito / auditoria",
        "notes": ""
      },
      {
        "name": "data_hora_utc",
        "type": "DATETIME",
        "nullable": false,
        "default": "CURRENT_TIMESTAMP()",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      }
    ],
    "pk": [
      "id_log_acesso"
    ],
    "foreignKeys": [
      {
        "column": "id_funcionario",
        "references": "funcionario.id_funcionario"
      }
    ]
  },
  {
    "name": "log_auditoria",
    "columns": [
      {
        "name": "id_log_auditoria",
        "type": "BIGINT(20)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "id_funcionario",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "funcionario.id_funcionario",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → funcionario.id_funcionario. "
      },
      {
        "name": "tabela_afetada",
        "type": "VARCHAR(64)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "operacao",
        "type": "VARCHAR(30)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "id_registro_afetado",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "dados_anteriores",
        "type": "LONGTEXT",
        "nullable": true,
        "default": "NULL",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Auditoria • verificar minimização",
        "rbac": "Acesso restrito / auditoria",
        "notes": ""
      },
      {
        "name": "dados_novos",
        "type": "LONGTEXT",
        "nullable": true,
        "default": "NULL",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Auditoria • verificar minimização",
        "rbac": "Acesso restrito / auditoria",
        "notes": ""
      },
      {
        "name": "ip_origem",
        "type": "VARCHAR(45)",
        "nullable": true,
        "default": "NULL",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Pessoal potencial • identificador online",
        "rbac": "Acesso restrito / auditoria",
        "notes": ""
      },
      {
        "name": "data_hora",
        "type": "DATETIME",
        "nullable": false,
        "default": "CURRENT_TIMESTAMP()",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      }
    ],
    "pk": [
      "id_log_auditoria"
    ],
    "foreignKeys": [
      {
        "column": "id_funcionario",
        "references": "funcionario.id_funcionario"
      }
    ]
  },
  {
    "name": "venda_pagamento",
    "columns": [
      {
        "name": "id_venda_pagamento",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": true,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave primária. "
      },
      {
        "name": "id_venda",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "venda.id_venda",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → venda.id_venda. "
      },
      {
        "name": "id_forma_pagamento",
        "type": "INT(11)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": "forma_pagamento.id_forma_pagamento",
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": "Chave estrangeira → forma_pagamento.id_forma_pagamento. "
      },
      {
        "name": "valor_pago",
        "type": "DECIMAL(10,2)",
        "nullable": false,
        "default": null,
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      },
      {
        "name": "codigo_autorizacao",
        "type": "VARCHAR(50)",
        "nullable": true,
        "default": "NULL",
        "generated": false,
        "pk": false,
        "fk": null,
        "unique": false,
        "privacy": "Operacional • avaliar contexto",
        "rbac": "Conforme matriz RBAC do documento",
        "notes": ""
      }
    ],
    "pk": [
      "id_venda_pagamento"
    ],
    "foreignKeys": [
      {
        "column": "id_venda",
        "references": "venda.id_venda"
      },
      {
        "column": "id_forma_pagamento",
        "references": "forma_pagamento.id_forma_pagamento"
      }
    ]
  }
];

const $ = s => document.querySelector(s);
const list = $('#tables'); const search=$('#search');
let theme=localStorage.getItem('trimix-theme')||'light';
function setTheme(t){theme=t;document.documentElement.dataset.theme=t;localStorage.setItem('trimix-theme',t);$('#theme').textContent=t==='dark'?'☀️ Modo claro':'🌙 Modo escuro'}
setTheme(theme);$('#theme').addEventListener('click',()=>setTheme(theme==='dark'?'light':'dark'));
const escapeHtml=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(){const q=search.value.trim().toLocaleLowerCase('pt-BR');let found=0;
list.innerHTML=TABLES.map(t=>{const matches=!q||t.name.toLowerCase().includes(q)||t.columns.some(c=>[c.name,c.type,c.fk,c.privacy].some(x=>String(x||'').toLowerCase().includes(q)));
if(!matches)return '';found++;return `<details class="table-card" ${q?'open':''}><summary><strong>${escapeHtml(t.name)}</strong><span>${t.columns.length} colunas · ${t.foreignKeys.length} FKs</span></summary><div class="scroll"><table><thead><tr><th>Coluna</th><th>Tipo</th><th>Restrições (DDL)</th><th>Governança / LGPD</th><th>RBAC (orientação)</th></tr></thead><tbody>${t.columns.map(c=>`<tr><td><code>${escapeHtml(c.name)}</code>${c.pk?' <b class="tag">PK</b>':''}${c.fk?' <b class="tag">FK</b>':''}</td><td><code>${escapeHtml(c.type)}</code></td><td>${c.nullable?'NULL':'NOT NULL'}${c.default!==null?' · DEFAULT '+escapeHtml(c.default):''}${c.unique?' · UNIQUE':''}${c.generated?' · GENERATED':''}${c.fk?'<br>→ '+escapeHtml(c.fk):''}</td><td>${escapeHtml(c.privacy)} <span class="tag">LGPD/GDPR*</span></td><td>${escapeHtml(c.rbac)}</td></tr>`).join('')}</tbody></table></div></details>`}).join('');$('#results').textContent=`${found} de ${TABLES.length} tabelas exibidas`;}
search.addEventListener('input',render);render();
const dialog=$('#derDialog'), viewer=$('#viewer');let pz;
$('#openDer').addEventListener('click',()=>{dialog.showModal();if(!pz&&window.Panzoom){pz=Panzoom(viewer,{maxScale:12,minScale:.3,contain:'outside'});viewer.parentElement.addEventListener('wheel',pz.zoomWithWheel,{passive:false});}});
$('#closeDer').addEventListener('click',()=>dialog.close());$('#zoomIn').addEventListener('click',()=>pz?.zoomIn());$('#zoomOut').addEventListener('click',()=>pz?.zoomOut());$('#resetZoom').addEventListener('click',()=>pz?.reset());
