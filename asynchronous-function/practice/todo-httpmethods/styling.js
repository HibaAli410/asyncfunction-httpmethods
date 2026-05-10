const input = document.getElementById('inputid')
const div = document.getElementById('container')
div.classList.add(
  'w-[60%]',
  'h-auto',
  'bg-slate-200',
  'mx-auto',
  'mt-10',
  'rounded-lg',
  'p-4'
);
const ul = document.createElement('ul')
input.classList.add(
  'w-full',
  'h-12',
  'flex',
  'mx-auto',
  'mt-10',
  'justify-between',
  'text-center',
  'border',
  'bg-gray-100',
  'focus:border-blue-500',
  'border-gray-200',
  'rounded-lg'
)
ul.classList.add(
  'w-full',
  'h-auto',
  'flex',
  'flex-col',
  'mx-auto',
  'mt-2',
  'text-center'
)
document.body.appendChild(div)
div.appendChild(ul)