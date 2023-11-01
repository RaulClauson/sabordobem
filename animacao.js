        // Obtém todos os links
        const links = document.querySelectorAll('.btn');

        // Obtém a div e o elemento dentro dela
        const minhaDiv = document.querySelector('.fundo_carrega2');
        const minhaDiv2 = document.querySelector('.carrega2');

        // Adiciona um evento de clique a cada link
        links.forEach(link => {
            link.addEventListener('click', () => {
                // Alterna a classe 'minhaClasseTogglable' na div
                if(minhaDiv.classList.contains('fundo_carrega2')) {
                    minhaDiv.classList.remove('fundo_carrega2')
                    minhaDiv.classList.add('fundo_carrega2_ativa')
                  } else {
                    minhaDiv.classList.remove('fundo_carrega2_ativa')
                    minhaDiv.classList.add('fundo_carrega2')
                  }

                if(minhaDiv2.classList.contains('carrega2')) {
                    minhaDiv2.classList.remove('carrega2')
                    minhaDiv2.classList.add('carrega2_ativa')
                  } else {
                    minhaDiv2.classList.remove('carrega2_ativa')
                    minhaDiv2.classList.add('carrega2')
                  }
            });
        });