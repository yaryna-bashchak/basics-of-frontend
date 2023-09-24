const fields = ['name', 'variant', 'group', 'phone', 'id-card']

const ukChar = '[А-ЩЬЮЯҐЄІЇа-щьюяґєії]'

const regex = {
  name: new RegExp(`^${ukChar}+ ${ukChar}\\.${ukChar}\\.$`),
  variant: /^\d{1,2}$/,
  group: new RegExp(`^${ukChar}{2}-\\d{2}$`),
  phone: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
  'id-card': new RegExp(`^${ukChar}{2} №\\d{6}$`)
}

const removeError = id => {
  document.getElementById(id).classList.remove('error')
  document.getElementById(`${id}-tip`).classList.remove('error')
}

function validateForm () {
  const inputs = {
    name: document.getElementById('name').value,
    variant: document.getElementById('variant').value,
    group: document.getElementById('group').value,
    phone: document.getElementById('phone').value,
    'id-card': document.getElementById('id-card').value
  }

  let errors = []

  fields.forEach(id => {
    removeError(id)

    if (!regex[id].test(inputs[id])) {
      errors.push(id)
    }
  })

  if (errors.length > 0) {
    errors.forEach(id => {
      document.getElementById(id).classList.add('error')
      document.getElementById(`${id}-tip`).classList.add('error')
    })
  } else {
    alert(
      `ПІБ: ${inputs['name']}\nВаріант: ${inputs['variant']}\nГрупа: ${inputs['group']}\nТелефон: ${inputs['phone']}\nID-card: ${inputs['id-card']}`
    )
  }
}
