/**
 * @fileoverview gRPC-Web generated client stub for server
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.server = require('./supply_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.server.SupplyClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.server.SupplyPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.server.CreateOrderRequest,
 *   !proto.server.CreateOrderResponse>}
 */
const methodInfo_Supply_CreateOrder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.server.CreateOrderResponse,
  /** @param {!proto.server.CreateOrderRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.CreateOrderResponse.deserializeBinary
);


/**
 * @param {!proto.server.CreateOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.server.CreateOrderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.server.CreateOrderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.server.SupplyClient.prototype.createOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/server.Supply/CreateOrder',
      request,
      metadata || {},
      methodInfo_Supply_CreateOrder,
      callback);
};


/**
 * @param {!proto.server.CreateOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.server.CreateOrderResponse>}
 *     A native promise that resolves to the response
 */
proto.server.SupplyPromiseClient.prototype.createOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/server.Supply/CreateOrder',
      request,
      metadata || {},
      methodInfo_Supply_CreateOrder);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.server.SendOrderRequest,
 *   !proto.server.SendOrderResponse>}
 */
const methodInfo_Supply_SendOrder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.server.SendOrderResponse,
  /** @param {!proto.server.SendOrderRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.SendOrderResponse.deserializeBinary
);


/**
 * @param {!proto.server.SendOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.server.SendOrderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.server.SendOrderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.server.SupplyClient.prototype.sendOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/server.Supply/SendOrder',
      request,
      metadata || {},
      methodInfo_Supply_SendOrder,
      callback);
};


/**
 * @param {!proto.server.SendOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.server.SendOrderResponse>}
 *     A native promise that resolves to the response
 */
proto.server.SupplyPromiseClient.prototype.sendOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/server.Supply/SendOrder',
      request,
      metadata || {},
      methodInfo_Supply_SendOrder);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.server.AddOrderItemRequest,
 *   !proto.server.AddOrderItemResponse>}
 */
const methodInfo_Supply_AddOrderItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.server.AddOrderItemResponse,
  /** @param {!proto.server.AddOrderItemRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.AddOrderItemResponse.deserializeBinary
);


/**
 * @param {!proto.server.AddOrderItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.server.AddOrderItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.server.AddOrderItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.server.SupplyClient.prototype.addOrderItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/server.Supply/AddOrderItem',
      request,
      metadata || {},
      methodInfo_Supply_AddOrderItem,
      callback);
};


/**
 * @param {!proto.server.AddOrderItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.server.AddOrderItemResponse>}
 *     A native promise that resolves to the response
 */
proto.server.SupplyPromiseClient.prototype.addOrderItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/server.Supply/AddOrderItem',
      request,
      metadata || {},
      methodInfo_Supply_AddOrderItem);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.server.RemoveOrderItemRequest,
 *   !proto.server.RemoveOrderItemResponse>}
 */
const methodInfo_Supply_RemoveOrderItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.server.RemoveOrderItemResponse,
  /** @param {!proto.server.RemoveOrderItemRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.RemoveOrderItemResponse.deserializeBinary
);


/**
 * @param {!proto.server.RemoveOrderItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.server.RemoveOrderItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.server.RemoveOrderItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.server.SupplyClient.prototype.removeOrderItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/server.Supply/RemoveOrderItem',
      request,
      metadata || {},
      methodInfo_Supply_RemoveOrderItem,
      callback);
};


/**
 * @param {!proto.server.RemoveOrderItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.server.RemoveOrderItemResponse>}
 *     A native promise that resolves to the response
 */
proto.server.SupplyPromiseClient.prototype.removeOrderItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/server.Supply/RemoveOrderItem',
      request,
      metadata || {},
      methodInfo_Supply_RemoveOrderItem);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.server.ReceiveOrderItemRequest,
 *   !proto.server.ReceiveOrderItemResponse>}
 */
const methodInfo_Supply_ReceiveOrderItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.server.ReceiveOrderItemResponse,
  /** @param {!proto.server.ReceiveOrderItemRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.ReceiveOrderItemResponse.deserializeBinary
);


/**
 * @param {!proto.server.ReceiveOrderItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.server.ReceiveOrderItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.server.ReceiveOrderItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.server.SupplyClient.prototype.receiveOrderItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/server.Supply/ReceiveOrderItem',
      request,
      metadata || {},
      methodInfo_Supply_ReceiveOrderItem,
      callback);
};


/**
 * @param {!proto.server.ReceiveOrderItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.server.ReceiveOrderItemResponse>}
 *     A native promise that resolves to the response
 */
proto.server.SupplyPromiseClient.prototype.receiveOrderItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/server.Supply/ReceiveOrderItem',
      request,
      metadata || {},
      methodInfo_Supply_ReceiveOrderItem);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.server.ModifyRequestedQuantityRequest,
 *   !proto.server.ModifyRequestedQuantityResponse>}
 */
const methodInfo_Supply_ModifyRequestedQuantity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.server.ModifyRequestedQuantityResponse,
  /** @param {!proto.server.ModifyRequestedQuantityRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.ModifyRequestedQuantityResponse.deserializeBinary
);


/**
 * @param {!proto.server.ModifyRequestedQuantityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.server.ModifyRequestedQuantityResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.server.ModifyRequestedQuantityResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.server.SupplyClient.prototype.modifyRequestedQuantity =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/server.Supply/ModifyRequestedQuantity',
      request,
      metadata || {},
      methodInfo_Supply_ModifyRequestedQuantity,
      callback);
};


/**
 * @param {!proto.server.ModifyRequestedQuantityRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.server.ModifyRequestedQuantityResponse>}
 *     A native promise that resolves to the response
 */
proto.server.SupplyPromiseClient.prototype.modifyRequestedQuantity =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/server.Supply/ModifyRequestedQuantity',
      request,
      metadata || {},
      methodInfo_Supply_ModifyRequestedQuantity);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.server.FindOrderRequest,
 *   !proto.server.FindOrderResponse>}
 */
const methodInfo_Supply_FindOrder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.server.FindOrderResponse,
  /** @param {!proto.server.FindOrderRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.FindOrderResponse.deserializeBinary
);


/**
 * @param {!proto.server.FindOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.server.FindOrderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.server.FindOrderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.server.SupplyClient.prototype.findOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/server.Supply/FindOrder',
      request,
      metadata || {},
      methodInfo_Supply_FindOrder,
      callback);
};


/**
 * @param {!proto.server.FindOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.server.FindOrderResponse>}
 *     A native promise that resolves to the response
 */
proto.server.SupplyPromiseClient.prototype.findOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/server.Supply/FindOrder',
      request,
      metadata || {},
      methodInfo_Supply_FindOrder);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.server.FindProjectOrderDatesRequest,
 *   !proto.server.FindProjectOrderDatesResponse>}
 */
const methodInfo_Supply_FindProjectOrderDates = new grpc.web.AbstractClientBase.MethodInfo(
  proto.server.FindProjectOrderDatesResponse,
  /** @param {!proto.server.FindProjectOrderDatesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.FindProjectOrderDatesResponse.deserializeBinary
);


/**
 * @param {!proto.server.FindProjectOrderDatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.server.FindProjectOrderDatesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.server.FindProjectOrderDatesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.server.SupplyClient.prototype.findProjectOrderDates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/server.Supply/FindProjectOrderDates',
      request,
      metadata || {},
      methodInfo_Supply_FindProjectOrderDates,
      callback);
};


/**
 * @param {!proto.server.FindProjectOrderDatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.server.FindProjectOrderDatesResponse>}
 *     A native promise that resolves to the response
 */
proto.server.SupplyPromiseClient.prototype.findProjectOrderDates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/server.Supply/FindProjectOrderDates',
      request,
      metadata || {},
      methodInfo_Supply_FindProjectOrderDates);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.server.DeleteOrderRequest,
 *   !proto.server.DeleteOrderResponse>}
 */
const methodInfo_Supply_DeleteOrder = new grpc.web.AbstractClientBase.MethodInfo(
  proto.server.DeleteOrderResponse,
  /** @param {!proto.server.DeleteOrderRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.DeleteOrderResponse.deserializeBinary
);


/**
 * @param {!proto.server.DeleteOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.server.DeleteOrderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.server.DeleteOrderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.server.SupplyClient.prototype.deleteOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/server.Supply/DeleteOrder',
      request,
      metadata || {},
      methodInfo_Supply_DeleteOrder,
      callback);
};


/**
 * @param {!proto.server.DeleteOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.server.DeleteOrderResponse>}
 *     A native promise that resolves to the response
 */
proto.server.SupplyPromiseClient.prototype.deleteOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/server.Supply/DeleteOrder',
      request,
      metadata || {},
      methodInfo_Supply_DeleteOrder);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.server.ProductSearchRequest,
 *   !proto.server.ProductSearchResponse>}
 */
const methodInfo_Supply_ProductSearch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.server.ProductSearchResponse,
  /** @param {!proto.server.ProductSearchRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.ProductSearchResponse.deserializeBinary
);


/**
 * @param {!proto.server.ProductSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.server.ProductSearchResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.server.ProductSearchResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.server.SupplyClient.prototype.productSearch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/server.Supply/ProductSearch',
      request,
      metadata || {},
      methodInfo_Supply_ProductSearch,
      callback);
};


/**
 * @param {!proto.server.ProductSearchRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.server.ProductSearchResponse>}
 *     A native promise that resolves to the response
 */
proto.server.SupplyPromiseClient.prototype.productSearch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/server.Supply/ProductSearch',
      request,
      metadata || {},
      methodInfo_Supply_ProductSearch);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.server.CreateProjectRequest,
 *   !proto.server.CreateProjectResponse>}
 */
const methodInfo_Supply_CreateProject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.server.CreateProjectResponse,
  /** @param {!proto.server.CreateProjectRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.CreateProjectResponse.deserializeBinary
);


/**
 * @param {!proto.server.CreateProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.server.CreateProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.server.CreateProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.server.SupplyClient.prototype.createProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/server.Supply/CreateProject',
      request,
      metadata || {},
      methodInfo_Supply_CreateProject,
      callback);
};


/**
 * @param {!proto.server.CreateProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.server.CreateProjectResponse>}
 *     A native promise that resolves to the response
 */
proto.server.SupplyPromiseClient.prototype.createProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/server.Supply/CreateProject',
      request,
      metadata || {},
      methodInfo_Supply_CreateProject);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.server.CloseProjectRequest,
 *   !proto.server.CloseProjectResponse>}
 */
const methodInfo_Supply_CloseProject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.server.CloseProjectResponse,
  /** @param {!proto.server.CloseProjectRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.CloseProjectResponse.deserializeBinary
);


/**
 * @param {!proto.server.CloseProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.server.CloseProjectResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.server.CloseProjectResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.server.SupplyClient.prototype.closeProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/server.Supply/CloseProject',
      request,
      metadata || {},
      methodInfo_Supply_CloseProject,
      callback);
};


/**
 * @param {!proto.server.CloseProjectRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.server.CloseProjectResponse>}
 *     A native promise that resolves to the response
 */
proto.server.SupplyPromiseClient.prototype.closeProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/server.Supply/CloseProject',
      request,
      metadata || {},
      methodInfo_Supply_CloseProject);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.server.FindProjectsRequest,
 *   !proto.server.FindProjectsResponse>}
 */
const methodInfo_Supply_FindProjects = new grpc.web.AbstractClientBase.MethodInfo(
  proto.server.FindProjectsResponse,
  /** @param {!proto.server.FindProjectsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.server.FindProjectsResponse.deserializeBinary
);


/**
 * @param {!proto.server.FindProjectsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.server.FindProjectsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.server.FindProjectsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.server.SupplyClient.prototype.findProjects =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/server.Supply/FindProjects',
      request,
      metadata || {},
      methodInfo_Supply_FindProjects,
      callback);
};


/**
 * @param {!proto.server.FindProjectsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.server.FindProjectsResponse>}
 *     A native promise that resolves to the response
 */
proto.server.SupplyPromiseClient.prototype.findProjects =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/server.Supply/FindProjects',
      request,
      metadata || {},
      methodInfo_Supply_FindProjects);
};


module.exports = proto.server;

