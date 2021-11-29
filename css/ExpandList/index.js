const ul = document.querySelector('.tree')
const lis = Array.from(document.querySelectorAll('li'))

ul.addEventListener('click', (e) => {
  const index = lis.indexOf(e.target)
  const target = lis[index]
  const classList = target.classList

  if (classList.contains('expand')) {
    classList.remove('expand')
  } else {
    classList.add('expand')
  }
}, false)
