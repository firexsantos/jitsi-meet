/**
 * The config keys to whitelist, the keys that can be overridden.
 * Currently we can only whitelist the first part of the properties, like
 * 'p2p.useStunTurn' and 'p2p.enabled' we whitelist all p2p options.
 * The whitelist is used only for config.js.
 *
 * @type Array
 */
export default [
    '_desktopSharingSourceDevice',
    '_peerConnStatusOutOfLastNTimeout',
    '_peerConnStatusRtcMuteTimeout',
    'abTesting',
    'analytics.disabled',
    'autoRecord',
    'autoRecordToken',
    'avgRtpStatsN',
    'callFlowsEnabled',
    'callStatsConfIDNamespace',
    'callStatsID',
    'callStatsSecret',

    /**
     * The display name of the CallKit call representing the conference/meeting
     * associated with this config.js including while the call is ongoing in the
     * UI presented by CallKit and in the system-wide call history. The property
     * is meant for use cases in which the room name is not desirable as a
     * display name for CallKit purposes and the desired display name is not
     * provided in the form of a JWT callee. As the value is associated with a
     * conference/meeting, the value makes sense not as a deployment-wide
     * configuration, only as a runtime configuration override/overwrite
     * provided by, for example, Jitsi Meet SDK for iOS.
     *
     * @type string
     */
    'callDisplayName',

    /**
     * The handle
     * ({@link https://developer.apple.com/documentation/callkit/cxhandle}) of
     * the CallKit call representing the conference/meeting associated with this
     * config.js. The property is meant for use cases in which the room URL is
     * not desirable as the handle for CallKit purposes. As the value is
     * associated with a conference/meeting, the value makes sense not as a
     * deployment-wide configuration, only as a runtime configuration
     * override/overwrite provided by, for example, Jitsi Meet SDK for iOS.
     *
     * @type string
     */
    'callHandle',

    /**
     * The UUID of the CallKit call representing the conference/meeting
     * associated with this config.js. The property is meant for use cases in
     * which Jitsi Meet is to work with a CallKit call created outside of Jitsi
     * Meet and to be adopted by Jitsi Meet such as, for example, an incoming
     * and/or outgoing CallKit call created by Jitsi Meet SDK for iOS
     * clients/consumers prior to giving control to Jitsi Meet. As the value is
     * associated with a conference/meeting, the value makes sense not as a
     * deployment-wide configuration, only as a runtime configuration
     * override/overwrite provided by, for example, Jitsi Meet SDK for iOS.
     *
     * @type string
     */
    'callUUID',

    'channelLastN',
    'constraints',
    'debug',
    'debugAudioLevels',
    'defaultLanguage',
    'desktopSharingChromeDisabled',
    'desktopSharingChromeExtId',
    'desktopSharingChromeMinExtVersion',
    'desktopSharingChromeSources',
    'desktopSharingFrameRate',
    'desktopSharingFirefoxDisabled',
    'desktopSharingSources',
    'disable1On1Mode',
    'disableAEC',
    'disableAGC',
    'disableAP',
    'disableAudioLevels',
    'disableDeepLinking',
    'disableH264',
    'disableHPF',
    'disableNS',
    'disableRemoteControl',
    'disableRtx',
    'disableSuspendVideo',
    'displayJids',
    'e2eping',
    'enableDisplayNameInStats',
    'enableLayerSuspension',
    'enableLipSync',
    'disableLocalVideoFlip',
    'enableRemb',
    'enableStatsID',
    'enableTalkWhileMuted',
    'enableTcc',
    'etherpad_base',
    'failICE',
    'fileRecordingsEnabled',
    'firefox_fake_device',
    'forceJVB121Ratio',
    'gatherStats',
    'googleApiApplicationClientID',
    'hiddenDomain',
    'hosts',
    'iAmRecorder',
    'iAmSipGateway',
    'iceTransportPolicy',
    'ignoreStartMuted',
    'liveStreamingEnabled',
    'localRecording',
    'minParticipants',
    'nick',
    'openBridgeChannel',
    'p2p',
    'preferH264',
    'requireDisplayName',
    'resolution',
    'startAudioMuted',
    'startAudioOnly',
    'startBitrate',
    'startSilent',
    'startScreenSharing',
    'startVideoMuted',
    'startWithAudioMuted',
    'startWithVideoMuted',
    'subject',
    'testing',
    'useIPv6',
    'useNicks',
    'useStunTurn',
    'webrtcIceTcpDisable',
    'webrtcIceUdpDisable'
];
