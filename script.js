document.addEventListener('DOMContentLoaded', function() {
    let currentStudentPhotoIndex = 0;
    let currentPhotographerPhotoIndex = 0;
    const studentPhotos = Array.from({ length: 11 }, (_, i) => `student/path_to_student_photo${i + 1}.jpg`);
    const photographerPhotos = Array.from({ length: 18 }, (_, i) => `teacher/path_to_photographer_photo${i + 1}.jpg`);

    function showStudentPhoto(index) {
        const studentImg = document.querySelector('.student-gallery .gallery-img');
        if (studentImg) {
            studentImg.classList.add('fade-out');
            setTimeout(() => {
                studentImg.src = studentPhotos[index];
                studentImg.classList.remove('fade-out');
            }, 500); // Длительность анимации
        }
    }

    function showPhotographerPhoto(index) {
        const photographerImg = document.querySelector('.photographer-gallery .gallery-img');
        if (photographerImg) {
            photographerImg.classList.add('fade-out');
            setTimeout(() => {
                photographerImg.src = photographerPhotos[index];
                photographerImg.classList.remove('fade-out');
            }, 500); // Длительность анимации
        }
    }

    const studentPrevBtn = document.querySelector('.student-gallery .prev-btn');
    if (studentPrevBtn) {
        studentPrevBtn.addEventListener('click', function() {
            currentStudentPhotoIndex = (currentStudentPhotoIndex > 0) ? currentStudentPhotoIndex - 1 : studentPhotos.length - 1;
            showStudentPhoto(currentStudentPhotoIndex);
        });
    }

    const studentNextBtn = document.querySelector('.student-gallery .next-btn');
    if (studentNextBtn) {
        studentNextBtn.addEventListener('click', function() {
            currentStudentPhotoIndex = (currentStudentPhotoIndex < studentPhotos.length - 1) ? currentStudentPhotoIndex + 1 : 0;
            showStudentPhoto(currentStudentPhotoIndex);
        });
    }

    const photographerPrevBtn = document.querySelector('.photographer-gallery .prev-btn');
    if (photographerPrevBtn) {
        photographerPrevBtn.addEventListener('click', function() {
            currentPhotographerPhotoIndex = (currentPhotographerPhotoIndex > 0) ? currentPhotographerPhotoIndex - 1 : photographerPhotos.length - 1;
            showPhotographerPhoto(currentPhotographerPhotoIndex);
        });
    }

    const photographerNextBtn = document.querySelector('.photographer-gallery .next-btn');
    if (photographerNextBtn) {
        photographerNextBtn.addEventListener('click', function() {
            currentPhotographerPhotoIndex = (currentPhotographerPhotoIndex < photographerPhotos.length - 1) ? currentPhotographerPhotoIndex + 1 : 0;
            showPhotographerPhoto(currentPhotographerPhotoIndex);
        });
    }

    // Initialize first photos
    showStudentPhoto(currentStudentPhotoIndex);
    showPhotographerPhoto(currentPhotographerPhotoIndex);
});

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        const content = item.querySelector('.faq-content');
        const toggleButton = item.querySelector('.faq-toggle');

        header.addEventListener('click', () => {
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                toggleButton.textContent = '×';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                toggleButton.textContent = '−';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    menuToggle.addEventListener('click', function() {
        mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
    });

    // Закрываем меню при клике на ссылку
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.style.display = 'none';
        });
    });

    // Открываем всплывающее окно
    const requestButton = document.getElementById('requestButton');
    const requestButtonBottom = document.getElementById('requestButtonBottom');
    const requestButtonBottom1 = document.getElementById('requestButtonBottom1');
    const requestButtonBottom2 = document.getElementById('requestButtonBottom2');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
    const requestForm = document.getElementById('requestForm');
    const formMessage = document.getElementById('formMessage');

    if (requestButton) {
        requestButton.addEventListener('click', function() {
            popup.style.display = 'block';
        });
    }

    if (requestButtonBottom) {
        requestButtonBottom.addEventListener('click', function() {
            popup.style.display = 'block';
        });
    }

    if (requestButtonBottom1) {
        requestButtonBottom1.addEventListener('click', function() {
            popup.style.display = 'block';
        });
    }

    if (requestButtonBottom2) {
        requestButtonBottom2.addEventListener('click', function() {
            popup.style.display = 'block';
        });
    }

    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });

    // Обработчик отправки формы
    requestForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        // Получаем значения полей формы
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        // Создаем объект для отправки данных
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);

        // Отправляем данные на сервер
        fetch('http://localhost/FTI_site/send_telegram.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data.startsWith('success')) {
                formMessage.innerHTML = 'Ваша заявка успешно отправлена!';
                formMessage.style.color = 'green';
            } else {
                formMessage.innerHTML = 'Произошла ошибка при отправке заявки: ' + data;
                formMessage.style.color = 'red';
            }
            // Закрываем всплывающее окно
            popup.style.display = 'none';
            // Очищаем поля формы
            requestForm.reset();
        })
        .catch(error => {
            formMessage.innerHTML = 'Произошла ошибка при отправке заявки: ' + error;
            formMessage.style.color = 'red';
        });
    });
});
