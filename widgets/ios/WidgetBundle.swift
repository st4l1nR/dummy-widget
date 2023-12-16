import SwiftUI
import WidgetKit

@main
struct MyWidgetBundle: WidgetBundle {
    var body: some Widget {
        MyWidget()
    }

    // This is the required main function
    static func main() {
        // You can perform any setup or configuration here.
    }
}
