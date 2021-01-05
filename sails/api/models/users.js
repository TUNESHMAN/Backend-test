module.exports = {
    tableName: 'users',
    attributes: {
      id: { type: 'number', required: true },
      email: { type: 'string', required: true },
      password: { type: 'string', required: true },
      createdAt: { type: 'ref', columnType: 'timestamp', autoCreatedAt: true, },
    updatedAt: { type: 'ref', columnType: 'timestamp', autoUpdatedAt: true, },
    },
  };