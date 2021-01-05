module.exports = {
    tableName: 'orders',
    attributes: {
      id: { type: 'number', required: true },
      name: { type: 'string', required: true },
      qty: { type: 'number' },
      createdAt: { type: 'ref', columnType: 'timestamp', autoCreatedAt: true, },
    updatedAt: { type: 'ref', columnType: 'timestamp', autoUpdatedAt: true, },
    },
  };