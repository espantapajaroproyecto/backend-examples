const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');

const dynamo = new AWS.DynamoDB.DocumentClient();
const tableName = 'Materias';

exports.handler = async (event) => {
  const method = event.httpMethod;

  try {
    if (method === 'POST') {
      const body = JSON.parse(event.body);
      const item = {
        id: uuidv4(),
        nombre: body.nombre,
        profesor: body.profesor,
        tema: body.tema
      };
      await dynamo.put({ TableName: tableName, Item: item }).promise();
      return response(201, item);
    }

    if (method === 'GET') {
      const data = await dynamo.scan({ TableName: tableName }).promise();
      return response(200, data.Items);
    }

    return response(405, { error: 'Método no soportado' });
  } catch (err) {
    console.error(err);
    return response(500, { error: 'Error interno' });
  }
};

function response(statusCode, body) {
  return {
    statusCode,
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  };
}
