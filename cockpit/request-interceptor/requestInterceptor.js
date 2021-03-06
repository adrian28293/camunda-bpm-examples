/*
 * Copyright Camunda Services GmbH and/or licensed to Camunda Services GmbH
 * under one or more contributor license agreements. See the NOTICE file
 * distributed with this work for additional information regarding copyright
 * ownership. Camunda licenses this file to you under the Apache License,
 * Version 2.0; you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// define a new module to be loaded
define([], function() {
  // inject original open function of the native XMLHttpRequest
  (function(open) {
    // override native opening function of XMLHttpRequest prototype
    XMLHttpRequest.prototype.open = function() {
      // call the original open function
      open.apply(this, arguments);

      // set the withCredentials property of the request
      this.withCredentials = true;

      // optionally set request headers, if needed
      // this.setRequestHeader('X-Something-I-Need-Just-To-Test', 'works');
    };
  })(XMLHttpRequest.prototype.open);
});
