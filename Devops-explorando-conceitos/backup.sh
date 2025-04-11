#! /bin/bash

diretorio_backup="/home/vulcao/Docs"

# Verificar se o diretório existe
if [ ! -d "$diretorio_backup" ]; then
    echo "Erro: Diretório $diretorio_backup não existe!"
    exit 1
fi

nome_arquivo="backup_$(date +%Y%m%d_%H%M%S).tar.gz"
tar -czf "$nome_arquivo" "$diretorio_backup"
echo "Backup concluído em $nome_arquivo"
