Hooks.once("ready", () => {
	if (!game.modules.get('lib-wrapper')?.active) {
		if (game.user.isGM) {
			ui.notifications.error("Module better-target requires the 'libWrapper' module. Please install and activate it.");
		}
		return;
	}

	// This is a horrible hack where we replace the entire method body, but I'm not certain there's a better way.
	libWrapper.register('better-target', 'Token.prototype._refreshTarget', function () {
		this.target.clear();
		if (!this.targeted.size) return;

		// Determine whether the current user has target and any other users
		const [others, user] = Array.from(this.targeted).partition(u => u === game.user);
		const userTarget = user.length;

		// For the current user, draw the target arrows
		if (userTarget) {
			let size = this.w;
			// Constrain dimensions to the shortest axis
			if (size > this.h) {
				size = this.h;
			}
			const padding = 12;
			const stroke = 6;
			const vmid = this.h / 2;
			const hmid = this.w / 2;
			const crossLen = (size / 2) - padding;
			this.target.beginFill(0xc72121, 1.0).lineStyle(1, 0x000000)
				.drawCircle(hmid, vmid, (size / 2) - padding)
				.beginHole()
				.drawCircle(hmid, vmid, (size / 2) - padding - stroke)
				.endHole()
				.drawRoundedRect(hmid - (stroke / 2), vmid - stroke - crossLen, stroke, crossLen)
				.drawRoundedRect(hmid - (stroke / 2), vmid + padding - stroke, stroke, crossLen)
				.drawRoundedRect(stroke, vmid - (stroke / 2), crossLen, stroke)
				.drawRoundedRect(hmid + padding - stroke, vmid - (stroke / 2), crossLen, stroke);
			/*
			// Original indicator
			.drawPolygon([-p, hh, -p - aw, hh - ah, -p - aw, hh + ah])
			.drawPolygon([w + p, hh, w + p + aw, hh - ah, w + p + aw, hh + ah])
			.drawPolygon([hw, -p, hw - ah, -p - aw, hw + ah, -p - aw])
			.drawPolygon([hw, h + p, hw - ah, h + p + aw, hw + ah, h + p + aw]);
			*/
		}

		// For other users, draw offset pips
		for (let [i, u] of others.entries()) {
			let color = colorStringToHex(u.data.color);
			this.target.beginFill(color, 1.0).lineStyle(2, 0x0000000).drawCircle(2 + (i * 8), 0, 6);
		}
	}, 'OVERRIDE');
});