import AgoraUIKit from "agora-react-uikit";

const Videocall = () => {
	const rtcProps = {
		appId: "a1927a1a4b404741a621a4468fa06aff",
		channel: "main",
	};
	return <AgoraUIKit rtcProps={rtcProps} />;
};

export default Videocall;
