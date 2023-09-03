export function buildCategorySelectOptions(data: ZZ.API.SecretCategorys): ZZ.API.SelectOptions {
  if (!data || data.length <= 0) {
    return []
  }

  const res: ZZ.API.SelectOptions = []
  for (const item of data) {
    const temp: ZZ.API.SelectOption = {
      value: item.id,
      label: item.name
    }

    res.push(temp)
  }

  return res
}
