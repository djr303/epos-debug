const generateReport = (actual, expected, schema) => {
  return {
    ...schema,
    ...actual,
    ...expected
  }
}

exports.generateReport = generateReport