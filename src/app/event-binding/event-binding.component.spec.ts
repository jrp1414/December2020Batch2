import { EventBindingComponent } from "./event-binding.component";

describe('Event Binding Component', () => {
    it('#MouseEntered() should change #message', () => {
      const comp = new EventBindingComponent();
      expect(comp.Message).toBe("Hello", 'off at first');
      comp.OnMouseEnter();
      expect(comp.Message).toBe("Mouse Entered", 'on after Mouse Enter');
      comp.OnMouseLeave();
      expect(comp.Message).toBe("Mouse left", 'off after Mouse Leave');
    });
  });