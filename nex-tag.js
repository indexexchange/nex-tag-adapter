/**
 * File Information
 * =============================================================================
 * @overview  Partner Module Template
 * @version   1.5.x
 * @author    Index Exchange
 * @copyright Copyright (C) 2016 Index Exchange All Rights Reserved.
 *
 * The information contained within this document is confidential, copyrighted
 * and or a trade secret. No part of this document may be reproduced or
 * distributed in any form or by any means, in whole or in part, without the
 * prior written permission of Index Exchange.
 * -----------------------------------------------------------------------------
 */

window.headertag.partnerScopes.push(function() {
    'use strict';

    /* =============================================================================
     * SECTION A | Configure Module Name and Feature Support
     * -----------------------------------------------------------------------------
     *
     * Configure all of the following settings for this module.
     *
     * PARTNER_ID:
     *     Three or four character partner ID provided by Index Exchange.
     *
     * SUPPORTED_TARGETING_TYPES:
     *     The types of targeting that are supported by this module.
     *
     *          - page: targeting is set on the page as a whole.
     *          - slot: targeting is set on each slot individually.
     *
     * SUPPORTED_ANALYTICS:
     *     The types of analytics the wrapper should support for this module.
     *
     *          - time:   time between when this module's getDemand function is
     *                    called, and when it returns its retrieved demand.
     *          - demand: the targeting information returned from this module.
     *
     */
    var d = document;
    var SCRIPT = 'script';
    var PARAMS = 'params';
    var SIZES = 'sizes';
    var SIZE = 'size';
    var CPM = 'cpm';
    var AD = 'ad';
    var WIDTH = 'width';
    var HEIGHT = 'height';
    var PUB_ZONE = 'pub_zone';
    var GROSS_PRICE = 'gross_price';
    var RESOURCE = 'resource';
    var DETAIL = 'detail';
    var BIDDER_CODE_RESPONSE_KEY = 'bidderCode';
    var BIDDER_CODE = 'pubgears';
    var SCRIPT_ID = 'mbid-header-tag';
    var ATTRIBUTE_PREFIX = 'data-bsm-';
    var SLOT_LIST_ATTRIBUTE = 'slot-list';
    var PUBLISHER_ATTRIBUTE = 'pub';
    var FLAG_ATTRIBUTE = 'flag';
    var PLACEMENT_CODE = 'placementCode';
    var BID_ID = 'bidId';
    var PUBLISHER_PARAM = 'publisherName';
    var PUB_ZONE_PARAM = 'pubZone';
    var BID_RECEIVED_EVENT_NAME = 'onBidResponse';
    var SLOT_READY_EVENT_NAME = 'onResourceComplete';
    var CREATIVE_TEMPLATE = decodeURIComponent("%3Cscript%3E%0A(function(define)%7B%0Adefine(function(a)%7B%0A%09var%20id%3D%20%22pg-ad-%22%20%2B%20Math.floor(Math.random()%20*%201e10)%2C%20d%3D%20document%0A%09d.write(\'%3Cdiv%20id%3D%22\'%2Bid%2B\'%22%3E%3C%2Fdiv%3E\')%0A%09a.push(%7B%0A%09%09pub%3A%20\'%25%25PUBLISHER_NAME%25%25\'%2C%0A%09%09pub_zone%3A%20\'%25%25PUB_ZONE%25%25\'%2C%0A%09%09sizes%3A%20%5B\'%25%25SIZE%25%25\'%5D%2C%0A%09%09flag%3A%20true%2C%0A%09%09container%3A%20d.getElementById(id)%2C%0A%09%7D)%3B%0A%7D)%7D)(function(f)%7Bvar%20key%3D\'uber_imps\'%2Ca%3Dthis%5Bkey%5D%3Dthis%5Bkey%5D%7C%7C%5B%5D%3Bf(a)%3B%7D)%3B%0A%3C%2Fscript%3E%0A%3Cscript%20src%3D%22%2F%2Fc.pubgears.com%2Ftags%2Fb%22%3E%3C%2Fscript%3E%0A");
    var TAG_URL = '//c.mbid.io/tags/h';
    var publisher = '';

    var PARTNER_ID = 'NEXT';

    var SUPPORTED_TARGETING_TYPES = {
        page: false,
        slot: true
    };

    var SUPPORTED_ANALYTICS = {
        time: true,
        demand: true
    };

    var SUPPORTED_OPTIONS = {};

    /* -------------------------------------------------------------------------- */

    var Utils = window.headertag.Utils;
    var Network = window.headertag.Network;
    var BidRoundingTransformer = window.headertag.BidRoundingTransformer;

    function validateTargetingType(tt) {
        return typeof tt === 'string' && SUPPORTED_TARGETING_TYPES[tt];
    }

    function init(config, callback) {
        //? if (DEBUG) {
        var err = [];

        if (!config.hasOwnProperty('targetingType') || !validateTargetingType(config.targetingType)) {
            err.push('targetingType either not provided or invalid.');
        }

        /* =============================================================================
         * SECTION B | Validate Module-Specific Configurations
         * -----------------------------------------------------------------------------
         *
         * Validate all the module-specific parameters in the `config` object.
         * Validation functions have been provided in the `Utils` object for
         * convenience. See ../lib/utils.js for more information.
         *
         * For required configurations use:
         *
         *     if (!config.hasOwnProperty(<parameter>) || ... || ...) {
         *         err.push(<error message>);
         *     }
         *
         * For optional configurations use:
         *
         *     if (config.hasOwnProperty(<parameters>)  && (... || ...)) {
         *         err.push(<error message>);
         *     }
         *
         */

        /* PUT CODE HERE */

        /* -------------------------------------------------------------------------- */

        var xSlotConfigValid = true;

        if (!config.hasOwnProperty('xSlots') || typeof config.xSlots !== 'object' || Utils.isArray(config.xSlots)) {
            err.push('xSlots either not provided or invalid.');
            xSlotConfigValid = false;
        } else {
            for(var xSlotName in config.xSlots){
                if(!config.xSlots.hasOwnProperty(xSlotName)){
                    continue;
                }

        /* =============================================================================
         * SECTION C | Validate Partner Slot Configurations
         * -----------------------------------------------------------------------------
         *
         * Validate the specific configurations that must appear in each xSlot.
         * An xSlot represents an ad slot as it is understood by the partner's end point.
         * Validation functions have been provided in the `Utils` object for
         * convenience. See ../lib/utils.js for more information.
         *
         * For required configurations use:
         *
         *     if (!config.hasOwnProperty(<parameter>) || ... || ...) {
         *         err.push(<error message>);
         *     }
         *
         * For optional configurations use:
         *
         *     if (config.hasOwnProperty(<parameters>)  && (... || ...)) {
         *         err.push(<error message>);
         *     }
         *
         */

        /* PUT CODE HERE */

        /* -------------------------------------------------------------------------- */

            }
        }

        if (!config.hasOwnProperty('mapping') || typeof config.xSlots !== 'object' || Utils.isArray(config.xSlots)) {
            err.push('mapping either not provided or invalid.');
        } else {
            var seenXSlots = {};

            for(var htSlotName in config.mapping){
                if(!config.mapping.hasOwnProperty(htSlotName)){
                    continue;
                }

                var htSlotMapping = config.mapping[htSlotName];

                if(!Utils.isArray(htSlotMapping) || !htSlotMapping.length){
                    err.push('slot mappings missing or invalid for htSlot ' + htSlotName);
                } else {
                    for(var k = 0; k < htSlotMapping.length; k++){
                        if(!Utils.validateNonEmptyString(htSlotMapping[k])){
                            err.push('slot mappings missing or invalid for htSlot ' + htSlotName);
                        } else if(xSlotConfigValid){
                            if(config.xSlots.hasOwnProperty(htSlotMapping[k])){
                                if(seenXSlots.hasOwnProperty(htSlotMapping[k])){
                                    err.push('xSlot ' + htSlotMapping[k] + ' mapped multiple times in ' + PARTNER_ID +' config');
                                } else {
                                    seenXSlots[htSlotMapping[k]] = true;
                                }
                            } else {
                                err.push('invalid xSlot ' + htSlotMapping[k] + ' in mapping for htSlot ' + htSlotName);
                            }
                        }
                    }
                }
            }
        }

        if (config.hasOwnProperty('targetKeyOverride')) {
            if (!Utils.validateNonEmptyObject(config.targetKeyOverride)) {
                err.push('targetKeyOverride must be a non-empty object');
            } else {
                if (config.targetKeyOverride.omKey && !Utils.validateNonEmptyString(config.targetKeyOverride.omKey)) {
                    err.push('targetKeyOverride.omKey must be a non-empty string');
                }

                if (config.targetKeyOverride.pmKey && !Utils.validateNonEmptyString(config.targetKeyOverride.pmKey)) {
                    err.push('targetKeyOverride.pmKey must be a non-empty string');
                }

                if (config.targetKeyOverride.idKey && !Utils.validateNonEmptyString(config.targetKeyOverride.idKey)) {
                    err.push('targetKeyOverride.idKey must be a non-empty string');
                }
            }
        }

        if(config.hasOwnProperty('roundingBuckets')){
            if (!Utils.validateNonEmptyObject(config.roundingBuckets)) {
                err.push('roundingBuckets must be a non-empty object');
            } else {
                var rConf = config.roundingBuckets;
                if(rConf.floor && (typeof rConf.floor !== 'number' || rConf.floor < 0)){
                    err.push('roundingBuckets.floor must be a non-negative number');
                }
                if(rConf.inputCentsMultiplier && (typeof rConf.inputCentsMultiplier !== 'number' || rConf.inputCentsMultiplier < 0)){
                    err.push('roundingBuckets.floor must be a non-negative number');
                }
                if(rConf.outputCentsDivisor && (typeof rConf.outputCentsDivisor !== 'number' || rConf.outputCentsDivisor < 0)){
                    err.push('roundingBuckets.floor must be a non-negative number');
                }
                if(rConf.outputPrecision && !Utils.validateInteger(rConf.outputPrecision)){
                    err.push('roundingBuckets.outputPrecision must be an integer');
                }
                if(rConf.roundingType && !Utils.validateInteger(rConf.roundingType, 0, 3)){
                    err.push('roundingBuckets.roundingType must be a valid rounding type');
                }
                if(rConf.buckets && (!Utils.isArray(rConf.buckets) || rConf.buckets.length === 0)){
                    err.push('roundingBuckets.buckets must be an array');
                } else {
                    for(var l = 0; l < rConf.buckets.length; l++){
                        if(!Utils.validateNonEmptyObject(rConf.buckets[l])){
                            err.push('roundingBuckets.buckets must contain non-empty objects');
                            break;
                        }
                    }
                }
            }
        }

        if (err.length) {
            callback(err);
            return;
        }

        //? }

        var nxtgBidder = new Partner(config);

        window.headertag.NexTagHtb = {};
        window.headertag.NexTagHtb.render = nxtgBidder.renderAd;

        window.headertag[PARTNER_ID] = {};
        window.headertag[PARTNER_ID].callback = nxtgBidder.responseCallback;

        callback(null, nxtgBidder);
    }

    function Partner(config) {
        var _this = this;

        var targetingType = config.targetingType;
        var supportedAnalytics = SUPPORTED_ANALYTICS;
        var supportedOptions = SUPPORTED_OPTIONS;
        var creativeStore = {};

        /* =============================================================================
         * Set default targeting keys to be used for DFP. Values for omKey and idKey are
         * mandatory. pmKey/pmidKey(deals) is only necessary if the partner will use a private market.
         *
         * Standard values are:
         *
         * omKey: ix_(PARTNER ID)_cpm
         * pmKey: ix_(PARTNER ID)_cpm
         * idKey: ix_(PARTNER ID)_id
         * pmidKey: ix_(PARTNER ID)_dealid
         */
        var targetingKeys = {
            omKey: 'ix_next_cpm',
            pmKey: 'ix_next_cpm',
            idKey: 'ix_next_id',
            pmidKey: 'ix_next_dealid'
        };

        if (config.targetKeyOverride) {
            if (config.targetKeyOverride.omKey) {
                targetingKeys.omKey = config.targetKeyOverride.omKey;
            }

            if (config.targetKeyOverride.pmKey) {
                targetingKeys.pmKey = config.targetKeyOverride.pmKey;
            }

            if (config.targetKeyOverride.idKey) {
                targetingKeys.idKey = config.targetKeyOverride.idKey;
            }

            if (config.targetKeyOverride.pmidKey) {
                targetingKeys.pmidKey = config.targetKeyOverride.pmidKey;
            }
        }

        var bidTransformer;

        /* =============================================================================
         * Set the default parameters for interpreting the prices sent by the bidder
         * endpoint. The bid transformer library uses cents internally, so this object
         * specifies how to transform to and from the units provided by the bidder
         * endpoint and expected by the DFP line item targeting. See
         * bid-rounding-transformer.js for more information.
         */
        var bidTransformConfig = {        // Default rounding configuration
            "floor": 0,                     // Minimum acceptable bid price
            "inputCentsMultiplier": 100,    // Multiply input bids by this to get cents
            "outputCentsDivisor": 1,        // Divide output bids in cents by this
            "outputPrecision": 0,           // Decimal places in output
            "roundingType": 1,              // Rounding method (1 is floor)
            "buckets": [{                   // Buckets specifying rounding steps
                "max": 2000,                // Maximum number of cents for this bucket
                "step": 5                   // Increments for this bucket in cents
            }, {
                "max": 5000,                // Maximum number of cents for this bucket
                "step": 100                 // Increments for this bucket in cents
            }]
        };

        if(config.roundingBuckets){
            bidTransformConfig = config.roundingBuckets;
        }

        /* =============================================================================
         * Use the bidTransformer object to round bids received from the partner
         * endpoint. Usage:
         *
         * var roundedBid = bidTransformer.transformBid(rawBid);
         */
        bidTransformer = BidRoundingTransformer(bidTransformConfig);

        /* =============================================================================
         * SECTION E | Copy over the Configurations to Internal Variables
         * -----------------------------------------------------------------------------
         *
         * Assign all the required values from the `config` object to internal
         * variables. These values do not need to be validated here as they have already
         * been validated in `init`.
         *
         * Example:
         *
         *      var <internal parameter> = config.<corresponding parameter>;
         */

        /* PUT CODE HERE */

        /* -------------------------------------------------------------------------- */

        this.getPartnerTargetingType = function getPartnerTargetingType() {
            return targetingType;
        };

        this.getSupportedAnalytics = function getSupportedAnalytics() {
            return supportedAnalytics;
        };

        this.getSupportedOptions = function getSupportedOptions() {
            return supportedOptions;
        };
        var proxy = null;
        var initialized = false;

        var pubZoneHtSlotMap={};
        var demand = {};
        var completed =false;

        function requestDemandForSlots(htSlotNames, callback){
            //TODO: Timout need to be added


            /* =============================================================================
             * SECTION F | Request demand from the Module's Ad Server
             * -----------------------------------------------------------------------------
             *
             * The `htSlotNames` argument is an array of HeaderTagSlot IDs for which demand
             * is requested. Look these up in the mapping object of the config to determine
             * the partner xSlots which should have demand requested for them.
             *
             * Make a request to the module's ad server to get demand. If there is an error
             * while doing so, then call `callback` as such:
             *
             *      callback(err);
             *
             * where `err` is a descriptive error message.
             *
             * If there are no errors, and demand is returned from the ad servers, call
             * `callback` as such:
             *
             *      callback(null, demand);
             *
             * where `demand` is an object containing the slot-level demand in the following
             * format:
             *
             *     {
             *         <htSlotId>: {
             *             demand: {
             *                 <key>: <value>,
             *                 <key>: <value>,
             *                 ...
             *             }
             *         },
             *         ...
             *     }
             */
            /* PUT CODE HERE */
            var slots = getSlotList(htSlotNames);
            publisher = config.publisherName;

            proxy = proxy || getScript(SCRIPT_ID) || makeScript(slots, publisher, SCRIPT_ID, TAG_URL);
            if (!initialized)
            { registerEventListeners(proxy); }

            initialized = true;

            callback(null, demand);
        }

        function getScript(id) {
            return d.getElementById(id);
        }

        function registerEventListeners(script) {
            script.addEventListener(BID_RECEIVED_EVENT_NAME, onBid, true);
            script.addEventListener(SLOT_READY_EVENT_NAME, onComplete, true);
        }

        function makeScript(slots, publisher, id, url) {
            var script = d.createElement(SCRIPT);
            script.src = url;
            script.id = id;
            script.setAttribute(ATTRIBUTE_PREFIX + SLOT_LIST_ATTRIBUTE, slots);
            script.setAttribute(ATTRIBUTE_PREFIX + FLAG_ATTRIBUTE, 'true');
            script.setAttribute(ATTRIBUTE_PREFIX + PUBLISHER_ATTRIBUTE, publisher);

            return loadScript(script);
        }

        function loadScript(script) {
            var anchor = (function(scripts) {
                return scripts[ scripts.length - 1 ];
            })(d.getElementsByTagName(SCRIPT));

            return anchor.parentNode.insertBefore(script, anchor);
        }


        function getSlotList(htSlotNames){
            var slots=[];
            htSlotNames.forEach(function(slot){
                var zoneSlot = getSlotFromXslots(config.mapping[slot]);
                pubZoneHtSlotMap[zoneSlot.split('@')[0]]=slot;
                slots.push(zoneSlot);
            });
            return slots.join(' ');
        }

        function getSlotFromXslots(slot){
            var result=[];
            slot.forEach(function(sl){
                var xSlot = config.xSlots[sl];
                var pubzone = getPubZonesFromXslot(xSlot);
                result.push(pubzone);
            })
            return result.join(' ')
        }

        function getPubZonesFromXslot(xSlot){
            var result=[];
            if(xSlot.hasOwnProperty('pubZone')){
                var pubZone = xSlot.pubZone;
                xSlot.sizes.forEach(function(size){
                    result.push([pubZone, getSize(size)].join('@'));
                })
            }
            return result.join(' ');
        }

        function getSize(size){
            return size.join('x');
        }
        function onBid(event){
//            console.log(event);
        }
        function onComplete(event){
//            console.log(event);
            var data = event[DETAIL];
            var size = data[RESOURCE].size;
            var pubZone = data[RESOURCE].pub_zone;
            var bids = data['clear_prices'];
            if(bids.length > 0){
                var winBid = bids[bids.length-1];
                var demandObj = {};
                demandObj[targetingKeys.omKey]=size +'_'+200;
                demandObj[targetingKeys.idKey]=pubZoneHtSlotMap[pubZone];

                demand[pubZoneHtSlotMap[pubZone]]={demand:{}};
                demand[pubZoneHtSlotMap[pubZone]]["demand"]= demandObj;
            }

        }
        this.getDemand = function getDemand(correlator, slots, callback) {
            var htSlotNames = Utils.getDivIds(slots);
            requestDemandForSlots(htSlotNames, function(err, demandForSlots){
                if (err) {
                    callback(err);
                    return;
                }

                if(!demandForSlots){
                    callback('Error: demandForSlots not set');
                    return;
                }
                var demand={
                    slot:{}
                }
                for (var htSlotName in demandForSlots) {
                    if (!demandForSlots.hasOwnProperty(htSlotName)) {
                        continue;
                    }
                    demand.slot[htSlotName] = demandForSlots[htSlotName];
                    demand.slot[htSlotName].timestamp = Utils.now();
                }
                callback(null, demand);
            });
        };

        this.responseCallback = function(responseObj){
            /* =============================================================================
             * SECTION G | Parse Demand from the Module's Ad Server
             * -----------------------------------------------------------------------------
             *
             * Run this function as a callback when the ad server responds with demand.
             * Store creatives and demand in global objects as needed for processing.
             */

            /* PUT CODE HERE */

            /* -------------------------------------------------------------------------- */
        };

        this.renderAd = function(doc, targetingMap, width, height) {
            /* =============================================================================
             * SECTION H | Render function
             * -----------------------------------------------------------------------------
             *
             * This function will be called by the DFP creative to render the ad. It should
             * work as-is, but additions may be necessary here if there beacons, tracking
             * pixels etc. that need to be called as well.
             */
            console.log("renderAd function");
            console.log(targetingMap);
            if (doc && targetingMap && width && height) {
                try {
                    var id = targetingMap[targetingKeys.idKey][0];
                    var sizeKey = width + 'x' + height;

                    if (window.headertag.sizeRetargeting && window.headertag.sizeRetargeting[sizeKey]){
                        width = window.headertag.sizeRetargeting[sizeKey][0];
                        height = window.headertag.sizeRetargeting[sizeKey][1];
                    }
                    var pubZone;
                    for(var ht in pubZoneHtSlotMap){
                        if(pubZoneHtSlotMap[ht]==id){
                            pubZone = ht;
                            break;
                        }
                    }
                    doc.write('<script>' +
                        '(function(define){' +
                        'define(function(a){ ' +
                        'var id= "cx-ad-" + Math.floor(Math.random() * 1e10), d= document; '+
                        'd.write(\'<div id="\'+id+\'"></div>\');'+
                        'a.push({' +
                        'pub:\''+publisher+'\','+
                        'pub_zone:\'' +pubZone+'\','+
                        'sizes:[\''+sizeKey+'\'],' +
                        'flag: true, ' +
                        'container: d.getElementById(id),\n' +
                        '});' +
                        '})})(function(f){var key=\'uber_imps\',a=this[key]=this[key]||[];f(a);});' +
                        '</script>' +
                        '<script src="//c.mbid.io/tags/b"></script>');
                    doc.close();
                    if (doc.defaultView && doc.defaultView.frameElement) {
                        doc.defaultView.frameElement.width = width;
                        doc.defaultView.frameElement.height = height;
                    }
                } catch (e){
                    //? if (DEBUG)
                    console.log('Error trying to write ' + PARTNER_ID + ' ad to the page');
                }

            }
        };

    }

    window.headertag.registerPartner(PARTNER_ID, init);
});